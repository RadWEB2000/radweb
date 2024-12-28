export default function ArrowExpand(props: tSVGFile) {
    return (
  <svg
    id="a"
    height={24}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
      {...props.attributes}
  >
    <path d="m19 6v12c0 .55273-.44775 1-1 1s-1-.44727-1-1v-9.58545l-10.18311 10.18311c-.19531.19531-.45117.29297-.70703.29297s-.51172-.09766-.70703-.29297c-.39062-.39062-.39062-1.02344 0-1.41406l10.1836-10.1836h-9.58643c-.55225 0-1-.44727-1-1s.44775-1 1-1h12c.55225 0 1 .44727 1 1z" />
  </svg>
  );
}
