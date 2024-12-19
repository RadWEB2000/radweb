export default function FlagFrench(props: tSVGFile) {
  return (
    <svg
      clipRule="evenodd"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      {...props.attributes}
    >
      <g
        id="FRANCE"
        transform="matrix(1.043188 0 0 1.043588 -11.5632 -11.13696)"
      >
        <g>
          <path
            d="m336.187 16.5h39.706c53.373.001 98.627 35.077 114.001 83.441l.169.537c3.533 11.298 5.437 23.314 5.437 35.772v34.594h-.286v170.312h-.287v34.594c0 66.088-53.588 119.745-119.606 119.75h-39.134z"
            fill="#f8444a"
          />
        </g>
        <g>
          <path d="m175.813 16.5h160.375v479h-160.375z" fill="#fff" />
        </g>
        <g>
          <path
            d="m175.813 16.5v479h-39.706c-8.103 0-16.019-.809-23.672-2.35l-.64-.131c-42.458-8.791-76.714-40.143-89.689-80.96l-.169-.537c-3.533-11.298-5.437-23.314-5.437-35.772v-34.594h.286v-170.312h.287v-34.594c0-57.776 40.955-106.05 95.362-117.283l.735-.15c7.602-1.52 15.463-2.317 23.509-2.317z"
            fill="#0533a4"
          />
        </g>
      </g>
    </svg>
  );
}
