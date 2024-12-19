export default function HamburgerMenu(props: tSVGFile) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      {...props.attributes}
    >
      <g id="Layer">
        <path d="m28 25a1 1 0 0 1 -1 1h-22a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1zm-1-10h-22a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2zm-22-7h22a1 1 0 0 0 0-2h-22a1 1 0 0 0 0 2z" />
      </g>
    </svg>
  );
}
