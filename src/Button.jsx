// eslint-disable-next-line react/prop-types
export default function Button({ href, className, children }) {
  const defaultClass = `px-5 py-2 rounded-lg border-3  `;
  return (
    <>
      <a href={`/${href}`}>
        <button className={`${defaultClass} ${className}`}>{children}</button>
      </a>
    </>
  );
}
