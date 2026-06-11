// XSS Protection - Sanitize HTML content (no external deps)
const ALLOWED_TAGS = new Set([
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'p', 'br', 'strong', 'em', 'u', 'a',
  'ul', 'ol', 'li', 'blockquote', 'code', 'pre',
  'img', 'div', 'span', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
  'figure', 'figcaption', 'section', 'article', 'aside',
]);

const ALLOWED_ATTRS: Record<string, string[]> = {
  a: ['href', 'title', 'target', 'rel', 'class'],
  img: ['src', 'alt', 'title', 'class', 'width', 'height'],
  '*': ['class', 'id'],
};

export const sanitizeHTML = (html: string): string => {
  if (typeof window === 'undefined') return html;

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');

  const clean = (node: Node): Node | null => {
    if (node.nodeType === Node.TEXT_NODE) return node.cloneNode();

    if (node.nodeType !== Node.ELEMENT_NODE) return null;

    const el = node as Element;
    const tag = el.tagName.toLowerCase();

    if (!ALLOWED_TAGS.has(tag)) {
      // unwrap — keep children
      const frag = document.createDocumentFragment();
      Array.from(el.childNodes).forEach(child => {
        const cleaned = clean(child);
        if (cleaned) frag.appendChild(cleaned);
      });
      return frag;
    }

    const newEl = document.createElement(tag);
    const allowed = [...(ALLOWED_ATTRS[tag] || []), ...(ALLOWED_ATTRS['*'] || [])];

    allowed.forEach(attr => {
      if (el.hasAttribute(attr)) {
        let val = el.getAttribute(attr)!;
        // Block javascript: URLs
        if ((attr === 'href' || attr === 'src') && /^\s*javascript:/i.test(val)) return;
        // Force safe link attributes
        if (attr === 'target') val = '_blank';
        if (attr === 'rel') val = 'noopener noreferrer';
        newEl.setAttribute(attr, val);
      }
    });

    // Ensure external links are safe
    if (tag === 'a') {
      if (!newEl.hasAttribute('rel')) newEl.setAttribute('rel', 'noopener noreferrer');
    }

    Array.from(el.childNodes).forEach(child => {
      const cleaned = clean(child);
      if (cleaned) newEl.appendChild(cleaned);
    });

    return newEl;
  };

  const result = document.createDocumentFragment();
  Array.from(doc.body.childNodes).forEach(child => {
    const cleaned = clean(child);
    if (cleaned) result.appendChild(cleaned);
  });

  const wrapper = document.createElement('div');
  wrapper.appendChild(result);
  return wrapper.innerHTML;
};

export const extractTextFromHTML = (html: string): string => {
  if (typeof window === 'undefined') return html.replace(/<[^>]*>/g, '');
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || '';
};
