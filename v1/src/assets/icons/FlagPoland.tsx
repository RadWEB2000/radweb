export default function FlagPoland(props: tSVGFile) {
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
      <g id="POLAND" transform="matrix(1.5625 0 0 1.5625 -144 -144)">
        <g>
          <path
            d="m96.191 256h319.618v56.889h-.192v23.111c0 44.151-35.8 79.996-79.904 80h-159.809c-5.413 0-10.701-.54-15.814-1.57l-.428-.087c-28.364-5.873-51.249-26.818-59.917-54.086l-.113-.359c-2.36-7.548-3.632-15.575-3.632-23.898v-23.111h.191z"
            fill="#ea304c"
          />
        </g>
        <g>
          <path
            d="m336.096 96c35.656.001 65.888 23.434 76.159 55.743l.113.359c2.36 7.548 3.632 15.575 3.632 23.898v23.111h-.191v56.889h-319.618v-56.889h.192v-23.111c0-38.598 27.36-70.848 63.707-78.352l.491-.1c5.078-1.015 10.33-1.548 15.706-1.548z"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  );
}
