import { SVGProps } from 'react';

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#38BDF8"
        d="M14 9q-.425 0-.713-.288T13 8V4q0-.425.288-.713T14 3h6q.425 0 .713.288T21 4v4q0 .425-.288.713T20 9h-6ZM4 13q-.425 0-.713-.288T3 12V4q0-.425.288-.713T4 3h6q.425 0 .713.288T11 4v8q0 .425-.288.713T10 13H4Zm10 8q-.425 0-.713-.288T13 20v-8q0-.425.288-.713T14 11h6q.425 0 .713.288T21 12v8q0 .425-.288.713T20 21h-6ZM4 21q-.425 0-.713-.288T3 20v-4q0-.425.288-.713T4 15h6q.425 0 .713.288T11 16v4q0 .425-.288.713T10 21H4Z"
      ></path>
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.2}
      stroke="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
      />
    </svg>
  );
}

export function LoadingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g>
        <circle cx="12" cy="3" r="1" fill="currentColor">
          <animate
            id="svgSpinners12DotsScaleRotate0"
            attributeName="r"
            begin="0;svgSpinners12DotsScaleRotate2.end-0.5s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          ></animate>
        </circle>
        <circle cx="16.5" cy="4.21" r="1" fill="currentColor">
          <animate
            id="svgSpinners12DotsScaleRotate1"
            attributeName="r"
            begin="svgSpinners12DotsScaleRotate0.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          ></animate>
        </circle>
        <circle cx="7.5" cy="4.21" r="1" fill="currentColor">
          <animate
            id="svgSpinners12DotsScaleRotate2"
            attributeName="r"
            begin="svgSpinners12DotsScaleRotate4.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          ></animate>
        </circle>
        <circle cx="19.79" cy="7.5" r="1" fill="currentColor">
          <animate
            id="svgSpinners12DotsScaleRotate3"
            attributeName="r"
            begin="svgSpinners12DotsScaleRotate1.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          ></animate>
        </circle>
        <circle cx="4.21" cy="7.5" r="1" fill="currentColor">
          <animate
            id="svgSpinners12DotsScaleRotate4"
            attributeName="r"
            begin="svgSpinners12DotsScaleRotate6.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          ></animate>
        </circle>
        <circle cx="21" cy="12" r="1" fill="currentColor">
          <animate
            id="svgSpinners12DotsScaleRotate5"
            attributeName="r"
            begin="svgSpinners12DotsScaleRotate3.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          ></animate>
        </circle>
        <circle cx="3" cy="12" r="1" fill="currentColor">
          <animate
            id="svgSpinners12DotsScaleRotate6"
            attributeName="r"
            begin="svgSpinners12DotsScaleRotate8.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          ></animate>
        </circle>
        <circle cx="19.79" cy="16.5" r="1" fill="currentColor">
          <animate
            id="svgSpinners12DotsScaleRotate7"
            attributeName="r"
            begin="svgSpinners12DotsScaleRotate5.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          ></animate>
        </circle>
        <circle cx="4.21" cy="16.5" r="1" fill="currentColor">
          <animate
            id="svgSpinners12DotsScaleRotate8"
            attributeName="r"
            begin="svgSpinners12DotsScaleRotatea.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          ></animate>
        </circle>
        <circle cx="16.5" cy="19.79" r="1" fill="currentColor">
          <animate
            id="svgSpinners12DotsScaleRotate9"
            attributeName="r"
            begin="svgSpinners12DotsScaleRotate7.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          ></animate>
        </circle>
        <circle cx="7.5" cy="19.79" r="1" fill="currentColor">
          <animate
            id="svgSpinners12DotsScaleRotatea"
            attributeName="r"
            begin="svgSpinners12DotsScaleRotateb.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          ></animate>
        </circle>
        <circle cx="12" cy="21" r="1" fill="currentColor">
          <animate
            id="svgSpinners12DotsScaleRotateb"
            attributeName="r"
            begin="svgSpinners12DotsScaleRotate9.begin+0.1s"
            calcMode="spline"
            dur="0.6s"
            keySplines=".27,.42,.37,.99;.53,0,.61,.73"
            values="1;2;1"
          ></animate>
        </circle>
        <animateTransform
          attributeName="transform"
          dur="6s"
          repeatCount="indefinite"
          type="rotate"
          values="360 12 12;0 12 12"
        ></animateTransform>
      </g>
    </svg>
  );
}

export function HomeOutlinedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6 19h3v-5q0-.425.288-.713T10 13h4q.425 0 .713.288T15 14v5h3v-9l-6-4.5L6 10v9Zm-2 0v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-4q-.425 0-.713-.288T13 20v-5h-2v5q0 .425-.288.713T10 21H6q-.825 0-1.413-.588T4 19Zm8-6.75Z"
      ></path>
    </svg>
  );
}

export function HomeRoundedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.713-.288T14 20v-5q0-.425-.288-.713T13 14h-2q-.425 0-.713.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.413-.588T4 19Z"
      ></path>
    </svg>
  );
}

export function PersonOutlinedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 5.9a2.1 2.1 0 1 1 0 4.2a2.1 2.1 0 0 1 0-4.2m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-2c0-2.66-5.33-4-8-4z"
      ></path>
    </svg>
  );
}

export function PersonRoundedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"
      ></path>
    </svg>
  );
}

export function UpdateIconOutlined(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM4 21q-.425 0-.713-.288T3 20v-2.825q0-.2.075-.388t.225-.337l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225T6.825 21H4ZM14.325 9.675l-.7-.7l1.4 1.4l-.7-.7Z"
      ></path>
    </svg>
  );
}

export function UpdateIconRounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM4 21q-.425 0-.713-.288T3 20v-2.825q0-.2.075-.388t.225-.337l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225T6.825 21H4Z"
      ></path>
    </svg>
  );
}

export function SettingsOutlinedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.875 22h-3.75q-.375 0-.65-.25t-.325-.625l-.3-2.325q-.325-.125-.613-.3t-.562-.375l-2.175.9q-.35.125-.7.025t-.55-.425L2.4 15.4q-.2-.325-.125-.7t.375-.6l1.875-1.425Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L2.65 9.9q-.3-.225-.375-.6t.125-.7l1.85-3.225q.175-.35.537-.438t.713.038l2.175.9q.275-.2.575-.375t.6-.3l.3-2.325q.05-.375.325-.625t.65-.25h3.75q.375 0 .65.25t.325.625l.3 2.325q.325.125.613.3t.562.375l2.175-.9q.35-.125.7-.025t.55.425L21.6 8.6q.2.325.125.7t-.375.6l-1.875 1.425q.025.175.025.338v.674q0 .163-.05.338l1.875 1.425q.3.225.375.6t-.125.7l-1.85 3.2q-.2.325-.563.438t-.712-.013l-2.125-.9q-.275.2-.575.375t-.6.3l-.3 2.325q-.05.375-.325.625t-.65.25Zm-1.825-6.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.012 2.475T12.05 15.5Zm0-2q-.625 0-1.063-.438T10.55 12q0-.625.438-1.063t1.062-.437q.625 0 1.063.438T13.55 12q0 .625-.438 1.063t-1.062.437ZM12 12Zm-1 8h1.975l.35-2.65q.775-.2 1.438-.588t1.212-.937l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12q0-.4-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587L11 20Z"
      ></path>
    </svg>
  );
}

export function SettingsRoundedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.875 22h-3.75q-.375 0-.65-.25t-.325-.625l-.3-2.325q-.325-.125-.613-.3t-.562-.375l-2.175.9q-.35.125-.7.025t-.55-.425L2.4 15.4q-.2-.325-.125-.7t.375-.6l1.875-1.425Q4.5 12.5 4.5 12.337v-.674q0-.163.025-.338L2.65 9.9q-.3-.225-.375-.6t.125-.7l1.85-3.225q.175-.35.537-.438t.713.038l2.175.9q.275-.2.575-.375t.6-.3l.3-2.325q.05-.375.325-.625t.65-.25h3.75q.375 0 .65.25t.325.625l.3 2.325q.325.125.613.3t.562.375l2.175-.9q.35-.125.7-.025t.55.425L21.6 8.6q.2.325.125.7t-.375.6l-1.875 1.425q.025.175.025.338v.674q0 .163-.05.338l1.875 1.425q.3.225.375.6t-.125.7l-1.85 3.2q-.2.325-.563.438t-.712-.013l-2.125-.9q-.275.2-.575.375t-.6.3l-.3 2.325q-.05.375-.325.625t-.65.25Zm-1.825-6.5q1.45 0 2.475-1.025T15.55 12q0-1.45-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12q0 1.45 1.012 2.475T12.05 15.5Z"
      ></path>
    </svg>
  );
}

export function GroupOutlinedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2 20q-.425 0-.713-.288T1 19v-1.8q0-.85.438-1.563T2.6 14.55q1.55-.775 3.15-1.163T9 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2V19q0 .425-.288.713T16 20H2Zm16.525 0q.225-.175.35-.438t.125-.587V17q0-1.1-.612-2.113T16.65 13.15q1.275.15 2.4.513t2.1.887q.9.5 1.375 1.112T23 17v2q0 .425-.287.713T22 20h-3.475ZM9 12q-1.65 0-2.825-1.175T5 8q0-1.65 1.175-2.825T9 4q1.65 0 2.825 1.175T13 8q0 1.65-1.175 2.825T9 12Zm10-4q0 1.65-1.175 2.825T15 12q-.275 0-.7-.063t-.7-.137q.675-.8 1.038-1.775T15 8q0-1.05-.362-2.025T13.6 4.2q.35-.125.7-.163T15 4q1.65 0 2.825 1.175T19 8ZM3 18h12v-.8q0-.275-.138-.5t-.362-.35q-1.35-.675-2.725-1.012T9 15q-1.4 0-2.775.338T3.5 16.35q-.225.125-.363.35T3 17.2v.8Zm6-8q.825 0 1.413-.588T11 8q0-.825-.588-1.413T9 6q-.825 0-1.413.588T7 8q0 .825.588 1.413T9 10Zm0-2Zm0 7Z"
      ></path>
    </svg>
  );
}

export function GroupRoundedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2 20q-.425 0-.713-.288T1 19v-1.8q0-.85.438-1.563T2.6 14.55q1.55-.775 3.15-1.163T9 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2V19q0 .425-.288.713T16 20H2Zm16.525 0q.225-.175.35-.438t.125-.587V17q0-1.1-.612-2.113T16.65 13.15q1.275.15 2.4.513t2.1.887q.9.5 1.375 1.112T23 17v2q0 .425-.287.713T22 20h-3.475ZM9 12q-1.65 0-2.825-1.175T5 8q0-1.65 1.175-2.825T9 4q1.65 0 2.825 1.175T13 8q0 1.65-1.175 2.825T9 12Zm10-4q0 1.65-1.175 2.825T15 12q-.275 0-.7-.063t-.7-.137q.675-.8 1.038-1.775T15 8q0-1.05-.362-2.025T13.6 4.2q.35-.125.7-.163T15 4q1.65 0 2.825 1.175T19 8Z"
      ></path>
    </svg>
  );
}

export function LabelOutlinedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m20.175 13.15l-3.525 5q-.275.4-.712.625T15 19H5q-.825 0-1.413-.588T3 17V7q0-.825.588-1.413T5 5h10q.5 0 .938.225t.712.625l3.525 5q.375.525.375 1.15t-.375 1.15ZM15 17l3.55-5L15 7H5v10h10ZM5 7v10V7Z"
      ></path>
    </svg>
  );
}

export function LabelRoundedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m20.175 13.15l-3.525 5q-.275.4-.712.625T15 19H5q-.825 0-1.413-.588T3 17V7q0-.825.588-1.413T5 5h10q.5 0 .938.225t.712.625l3.525 5q.375.525.375 1.15t-.375 1.15Z"
      ></path>
    </svg>
  );
}

export function CartOutlinedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.738.775T15.55 13H8.1L7 15h11q.425 0 .713.288T19 16q0 .425-.288.713T18 17H7q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H2q-.425 0-.713-.288T1 3q0-.425.288-.713T2 2h1.625q.275 0 .525.15t.375.425L5.2 4Zm3.35 7h7h-7Z"
      ></path>
    </svg>
  );
}

export function CartRoundedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.738.775T15.55 13H8.1L7 15h11q.425 0 .713.288T19 16q0 .425-.288.713T18 17H7q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H2q-.425 0-.713-.288T1 3q0-.425.288-.713T2 2h1.625q.275 0 .525.15t.375.425L5.2 4Z"
      ></path>
    </svg>
  );
}

export function FileIconOutlined(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M9 12q-.425 0-.713-.288T8 11q0-.425.288-.713T9 10h6q.425 0 .713.288T16 11q0 .425-.288.713T15 12H9Zm0-4q-.425 0-.713-.288T8 7q0-.425.288-.713T9 6h6q.425 0 .713.288T16 7q0 .425-.288.713T15 8H9Zm-3 6h7.5q.725 0 1.35.313t1.05.887l2.1 2.75V4H6v10Zm0 6h11.05l-2.725-3.575q-.15-.2-.362-.313T13.5 16H6v4Zm12 2H6q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.588 1.413T18 22ZM6 20V4v16Zm0-4v-2v2Z"
      ></path>
    </svg>
  );
}

export function FileIconRounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M9 12h6q.425 0 .713-.288T16 11q0-.425-.288-.713T15 10H9q-.425 0-.713.288T8 11q0 .425.288.713T9 12Zm0-4h6q.425 0 .713-.288T16 7q0-.425-.288-.713T15 6H9q-.425 0-.713.288T8 7q0 .425.288.713T9 8Zm10.95 12.475L15.9 15.2q-.425-.575-1.05-.887T13.5 14H4V4q0-.825.588-1.413T6 2h12q.825 0 1.413.588T20 4v16q0 .125-.013.238t-.037.237ZM6 22q-.825 0-1.412-.588T4 20v-4h9.5q.25 0 .463.113t.362.312l4.2 5.5q-.125.05-.262.063T18 22H6Z"
      ></path>
    </svg>
  );
}

export function SunOutlinedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 5q-.425 0-.713-.288T11 4V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v2q0 .425-.288.713T12 5Zm4.95 2.05q-.275-.275-.275-.687t.275-.713l1.4-1.425q.3-.3.712-.3t.713.3q.275.275.275.7t-.275.7L18.35 7.05q-.275.275-.7.275t-.7-.275ZM20 13q-.425 0-.713-.288T19 12q0-.425.288-.713T20 11h2q.425 0 .713.288T23 12q0 .425-.288.713T22 13h-2Zm-8 10q-.425 0-.713-.288T11 22v-2q0-.425.288-.713T12 19q.425 0 .713.288T13 20v2q0 .425-.288.713T12 23ZM5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275t.7.275L7.05 5.65q.275.275.275.7t-.275.7q-.3.275-.7.275t-.7-.275Zm12.7 12.725l-1.4-1.425q-.275-.3-.275-.713t.275-.687q.275-.275.688-.275t.712.275l1.425 1.4q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3ZM2 13q-.425 0-.713-.288T1 12q0-.425.288-.713T2 11h2q.425 0 .713.288T5 12q0 .425-.288.713T4 13H2Zm2.225 6.775q-.275-.275-.275-.7t.275-.7L5.65 16.95q.275-.275.687-.275t.713.275q.3.3.3.713t-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm0-2q1.65 0 2.825-1.175T16 12q0-1.65-1.175-2.825T12 8q-1.65 0-2.825 1.175T8 12q0 1.65 1.175 2.825T12 16Zm0-4Z"
      ></path>
    </svg>
  );
}

export function SunRoundedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 5q-.425 0-.713-.288T11 4V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v2q0 .425-.288.713T12 5Zm4.95 2.05q-.275-.275-.275-.687t.275-.713l1.4-1.425q.3-.3.712-.3t.713.3q.275.275.275.7t-.275.7L18.35 7.05q-.275.275-.7.275t-.7-.275ZM20 13q-.425 0-.713-.288T19 12q0-.425.288-.713T20 11h2q.425 0 .713.288T23 12q0 .425-.288.713T22 13h-2Zm-8 10q-.425 0-.713-.288T11 22v-2q0-.425.288-.713T12 19q.425 0 .713.288T13 20v2q0 .425-.288.713T12 23ZM5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275t.7.275L7.05 5.65q.275.275.275.7t-.275.7q-.3.275-.7.275t-.7-.275Zm12.7 12.725l-1.4-1.425q-.275-.3-.275-.713t.275-.687q.275-.275.688-.275t.712.275l1.425 1.4q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3ZM2 13q-.425 0-.713-.288T1 12q0-.425.288-.713T2 11h2q.425 0 .713.288T5 12q0 .425-.288.713T4 13H2Zm2.225 6.775q-.275-.275-.275-.7t.275-.7L5.65 16.95q.275-.275.687-.275t.713.275q.3.3.3.713t-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Z"
      ></path>
    </svg>
  );
}

export function MoonOutlinedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12.05 22q-.825 0-1.588-.113T8.9 21.5q.525-.275.938-.7t.712-.95q.35.075.763.113T12.1 20q1.325 0 2.6-.425t2.15-1.225q-2.15-.725-3.825-2.113t-2.737-3.225Q9.225 11.175 8.85 9.025T8.9 4.65q-2.225.8-3.563 2.938T4 12q-.525 0-1.038.113T2 12.45q-.075-2 .588-3.8t1.887-3.2q1.225-1.4 2.9-2.3T11 2.05q.4-.05.563.2t-.013.65q-1.05 2.325-.863 4.725t1.326 4.388Q13.15 14 15.124 15.35t4.525 1.6q.425.05.563.313t-.113.587q-1.425 2-3.538 3.075T12.05 22ZM7 20H4q-1.25 0-2.125-.863T1 17q0-1.25.875-2.125T4 14q.975 0 1.738.563T6.8 16H7q.825 0 1.413.588T9 18q0 .825-.588 1.413T7 20Zm3.425-7.675Z"
      ></path>
    </svg>
  );
}

export function MoonRoundedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12.05 22q-.825 0-1.588-.113T8.9 21.5q.525-.275.938-.7t.712-.95q.2-.325.325-.8T11 18q0-1.575-.925-2.663T7.5 14q-.6-.975-1.575-1.488T4 12q-.525 0-1.038.113T2 12.45q-.075-2 .588-3.8t1.887-3.2q1.225-1.4 2.9-2.3T11 2.05q.4-.05.563.2t-.013.65q-1.05 2.325-.863 4.725t1.326 4.388Q13.15 14 15.124 15.35t4.525 1.6q.425.05.563.313t-.113.587q-1.425 2-3.538 3.075T12.05 22ZM7 20H4q-1.25 0-2.125-.863T1 17q0-1.25.875-2.125T4 14q.975 0 1.738.563T6.8 16H7q.825 0 1.413.588T9 18q0 .825-.588 1.413T7 20Z"
      ></path>
    </svg>
  );
}

export function ComputerOutlinedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10 19v-2H4q-.825 0-1.413-.588T2 15V5q0-.825.588-1.413T4 3h16q.825 0 1.413.588T22 5v10q0 .825-.588 1.413T20 17h-6v2h1q.425 0 .713.288T16 20q0 .425-.288.713T15 21H9q-.425 0-.713-.288T8 20q0-.425.288-.713T9 19h1Zm-6-4h16V5H4v10Zm0 0V5v10Z"
      ></path>
    </svg>
  );
}

export function ComputerRoundedIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10 19v-2H4q-.825 0-1.413-.588T2 15V5q0-.825.588-1.413T4 3h16q.825 0 1.413.588T22 5v10q0 .825-.588 1.413T20 17h-6v2h1q.425 0 .713.288T16 20q0 .425-.288.713T15 21H9q-.425 0-.713-.288T8 20q0-.425.288-.713T9 19h1Z"
      ></path>
    </svg>
  );
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68Z"
      ></path>
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41L9 16.17z"
      ></path>
    </svg>
  );
}

export function CheckIndeterminateIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7 13q-.425 0-.713-.288T6 12q0-.425.288-.713T7 11h10q.425 0 .713.288T18 12q0 .425-.288.713T17 13H7Z"
      ></path>
    </svg>
  );
}

export function CircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0 0q-3.35 0-5.675-2.325T4 12q0-3.35 2.325-5.675T12 4q3.35 0 5.675 2.325T20 12q0 3.35-2.325 5.675T12 20Z"
      ></path>
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
      ></path>
    </svg>
  );
}

export function InfoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.713T12 11q-.425 0-.713.288T11 12v4q0 .425.288.713T12 17Zm0-8q.425 0 .713-.288T13 8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8q0 .425.288.713T12 9Zm0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
      ></path>
    </svg>
  );
}

export function SuccessIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275L10.6 13.8ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
      ></path>
    </svg>
  );
}

export function ErrorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 17q.425 0 .713-.288T13 16q0-.425-.288-.713T12 15q-.425 0-.713.288T11 16q0 .425.288.713T12 17Zm0-4q.425 0 .713-.288T13 12V8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8v4q0 .425.288.713T12 13Zm0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
      ></path>
    </svg>
  );
}

export function ShowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 16q1.875 0 3.188-1.313T16.5 11.5q0-1.875-1.313-3.188T12 7q-1.875 0-3.188 1.313T7.5 11.5q0 1.875 1.313 3.188T12 16Zm0-1.8q-1.125 0-1.913-.788T9.3 11.5q0-1.125.788-1.913T12 8.8q1.125 0 1.913.788T14.7 11.5q0 1.125-.787 1.913T12 14.2Zm0 4.8q-3.475 0-6.35-1.838T1.3 12.2q-.075-.125-.1-.312t-.025-.388q0-.2.025-.388t.1-.312q1.475-3.125 4.35-4.963T12 4q3.475 0 6.35 1.838T22.7 10.8q.075.125.1.313t.025.387q0 .2-.025.388t-.1.312q-1.475 3.125-4.35 4.963T12 19Zm0-7.5Zm0 5.5q2.825 0 5.188-1.488T20.8 11.5q-1.25-2.525-3.613-4.013T12 6Q9.175 6 6.812 7.488T3.2 11.5q1.25 2.525 3.613 4.013T12 17Z"
      ></path>
    </svg>
  );
}

export function HideIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m16.1 13.3l-1.45-1.45q.225-1.175-.675-2.2t-2.325-.8L10.2 7.4q.425-.2.863-.3T12 7q1.875 0 3.188 1.313T16.5 11.5q0 .5-.1.938t-.3.862Zm3.2 3.15l-1.45-1.4q.95-.725 1.688-1.587T20.8 11.5q-1.25-2.525-3.588-4.013T12 6q-.725 0-1.425.1T9.2 6.4L7.65 4.85q1.025-.425 2.1-.638T12 4q3.575 0 6.425 1.887T22.7 10.8q.075.125.1.313t.025.387q0 .2-.037.388t-.088.312q-.575 1.275-1.437 2.35t-1.963 1.9Zm-.2 5.45l-3.5-3.45q-.875.275-1.762.413T12 19q-3.575 0-6.425-1.888T1.3 12.2q-.075-.125-.1-.312t-.025-.388q0-.2.025-.375t.1-.3Q1.825 9.7 2.55 8.75T4.15 7L2.075 4.9Q1.8 4.625 1.8 4.212t.3-.712q.275-.275.7-.275t.7.275l17 17q.275.275.288.688t-.288.712q-.275.275-.7.275t-.7-.275ZM5.55 8.4q-.725.65-1.325 1.425T3.2 11.5q1.25 2.525 3.588 4.013T12 17q.5 0 .975-.063t.975-.137l-.9-.95q-.275.075-.525.113T12 16q-1.875 0-3.188-1.312T7.5 11.5q0-.275.038-.525t.112-.525L5.55 8.4Zm7.975 2.325ZM9.75 12.6Z"
      ></path>
    </svg>
  );
}

export function ArrowUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z"
      ></path>
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z"
      ></path>
    </svg>
  );
}

export function ArrowDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"
      ></path>
    </svg>
  );
}

export function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M14.71 15.88L10.83 12l3.88-3.88a.996.996 0 1 0-1.41-1.41L8.71 11.3a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0c.38-.39.39-1.03 0-1.42z"
      ></path>
    </svg>
  );
}

export function ArrowDownTallIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11 14.2V6q0-.425.288-.713T12 5q.425 0 .713.288T13 6v8.2l2.9-2.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.3.3-.7.3t-.7-.3l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l2.9 2.9Z"
      ></path>
    </svg>
  );
}

export function ArrowUpTallIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m11 8.8l-2.9 2.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L13 8.8V17q0 .425-.288.713T12 18q-.425 0-.713-.288T11 17V8.8Z"
      ></path>
    </svg>
  );
}

export function ArrowsUpDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m7 15l5 5l5-5M7 9l5-5l5 5"
      ></path>
    </svg>
  );
}

export function SignoutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h6q.425 0 .713.288T12 4q0 .425-.288.713T11 5H5v14h6q.425 0 .713.288T12 20q0 .425-.288.713T11 21H5Zm12.175-8H10q-.425 0-.713-.288T9 12q0-.425.288-.713T10 11h7.175L15.3 9.125q-.275-.275-.275-.675t.275-.7q.275-.3.7-.313t.725.288L20.3 11.3q.3.3.3.7t-.3.7l-3.575 3.575q-.3.3-.713.288t-.712-.313q-.275-.3-.263-.713t.288-.687l1.85-1.85Z"
      ></path>
    </svg>
  );
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V3q0-.425.288-.713T7 2q.425 0 .713.288T8 3v1h8V3q0-.425.288-.713T17 2q.425 0 .713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10ZM5 8h14V6H5v2Zm0 0V6v2Zm7 6q-.425 0-.713-.288T11 13q0-.425.288-.713T12 12q.425 0 .713.288T13 13q0 .425-.288.713T12 14Zm-4 0q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12q.425 0 .713.288T9 13q0 .425-.288.713T8 14Zm8 0q-.425 0-.713-.288T15 13q0-.425.288-.713T16 12q.425 0 .713.288T17 13q0 .425-.288.713T16 14Zm-4 4q-.425 0-.713-.288T11 17q0-.425.288-.713T12 16q.425 0 .713.288T13 17q0 .425-.288.713T12 18Zm-4 0q-.425 0-.713-.288T7 17q0-.425.288-.713T8 16q.425 0 .713.288T9 17q0 .425-.288.713T8 18Zm8 0q-.425 0-.713-.288T15 17q0-.425.288-.713T16 16q.425 0 .713.288T17 17q0 .425-.288.713T16 18Z"
      ></path>
    </svg>
  );
}

export function ColumnsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 19q-.425 0-.713-.288T3 18V6q0-.425.288-.713T4 5h3.325q.425 0 .713.288T8.325 6v12q0 .425-.287.713T7.325 19H4Zm6.325 0q-.425 0-.713-.288T9.325 18V6q0-.425.288-.713T10.325 5h3.325q.425 0 .713.288T14.65 6v12q0 .425-.288.713T13.65 19h-3.325Zm6.325 0q-.425 0-.713-.288T15.65 18V6q0-.425.288-.713T16.65 5h3.325q.425 0 .713.288t.287.712v12q0 .425-.288.713t-.712.287H16.65Z"
      ></path>
    </svg>
  );
}

export function AddIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11 13v3q0 .425.288.713T12 17q.425 0 .713-.288T13 16v-3h3q.425 0 .713-.288T17 12q0-.425-.288-.713T16 11h-3V8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8v3H8q-.425 0-.713.288T7 12q0 .425.288.713T8 13h3Zm1 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
      ></path>
    </svg>
  );
}

export function DeleteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"
      ></path>
    </svg>
  );
}

export function CopyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5 22q-.825 0-1.413-.588T3 20V7q0-.425.288-.713T4 6q.425 0 .713.288T5 7v13h10q.425 0 .713.288T16 21q0 .425-.288.713T15 22H5Zm4-4q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 1.413T18 18H9Z"
      ></path>
    </svg>
  );
}

export function MoneyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.948 1.25h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.06.44.075.964.079 1.57c.648.021 1.226.06 1.74.128c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238a17.54 17.54 0 0 1 1.74-.128c.004-.606.02-1.13.079-1.57c.084-.627.27-1.194.725-1.65c.456-.455 1.023-.64 1.65-.725c.595-.08 1.345-.08 2.243-.08ZM8.752 5.252c.378-.002.775-.002 1.192-.002h4.112c.417 0 .814 0 1.192.002c-.004-.57-.018-1-.064-1.347c-.063-.461-.17-.659-.3-.789c-.13-.13-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3c-.13.13-.237.327-.3.788c-.046.346-.06.776-.064 1.347ZM5.71 6.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.027-.14 2.382-.14 4.289c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.423-.423.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008c-.423-.423-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14ZM12 9.25a.75.75 0 0 1 .75.75v.01c1.089.274 2 1.133 2 2.323a.75.75 0 0 1-1.5 0c0-.384-.426-.916-1.25-.916c-.824 0-1.25.532-1.25.916s.426.917 1.25.917c1.385 0 2.75.96 2.75 2.417c0 1.19-.911 2.048-2 2.323V18a.75.75 0 0 1-1.5 0v-.01c-1.089-.274-2-1.133-2-2.323a.75.75 0 0 1 1.5 0c0 .384.426.916 1.25.916c.824 0 1.25-.532 1.25-.916s-.426-.917-1.25-.917c-1.385 0-2.75-.96-2.75-2.417c0-1.19.911-2.049 2-2.323V10a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function RatioIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12v8q0 .825-.588 1.413T20 22h-8Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 .575.075 1.125T4.3 14.2l3.05-3.05q.125-.125.3-.2t.375-.1q.175 0 .35.063t.325.187l2.6 2.175L14.575 10H14q-.425 0-.713-.288T13 9q0-.425.288-.713T14 8h3q.425 0 .713.288T18 9v3q0 .425-.288.713T17 13q-.425 0-.713-.288T16 12v-.575l-3.95 3.925q-.125.125-.3.2t-.35.075q-.2.025-.375-.038T10.7 15.4l-2.575-2.2l-2.95 2.95q1.05 1.725 2.838 2.788T12 20Zm7.5.5q.425 0 .713-.288t.287-.712q0-.425-.288-.713T19.5 18.5q-.425 0-.713.288t-.287.712q0 .425.288.713t.712.287ZM11.375 12Z"
      ></path>
    </svg>
  );
}

export function PdfGroupIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10 10.5h1q.425 0 .713-.288T12 9.5v-1q0-.425-.288-.713T11 7.5H9.5q-.2 0-.35.15T9 8v4q0 .2.15.35t.35.15q.2 0 .35-.15T10 12v-1.5Zm0-1v-1h1v1h-1Zm5 3q.425 0 .713-.288T16 11.5v-3q0-.425-.288-.713T15 7.5h-1.5q-.2 0-.35.15T13 8v4q0 .2.15.35t.35.15H15Zm-1-1v-3h1v3h-1Zm4-1h.5q.2 0 .35-.15T19 10q0-.2-.15-.35t-.35-.15H18v-1h.5q.2 0 .35-.15T19 8q0-.2-.15-.35t-.35-.15h-1q-.2 0-.35.15T17 8v4q0 .2.15.35t.35.15q.2 0 .35-.15T18 12v-1.5ZM8 18q-.825 0-1.413-.588T6 16V4q0-.825.588-1.413T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.588 1.413T20 18H8Zm0-2h12V4H8v12Zm-4 6q-.825 0-1.413-.588T2 20V7q0-.425.288-.713T3 6q.425 0 .713.288T4 7v13h13q.425 0 .713.288T18 21q0 .425-.288.713T17 22H4ZM8 4v12V4Z"
      ></path>
    </svg>
  );
}

export function ImageGroupIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.25 12.5L12.1 11q-.15-.175-.4-.175t-.4.175l-1.675 2.2q-.2.25-.063.525t.463.275h7.95q.325 0 .462-.275t-.062-.525l-2.425-3.175q-.15-.2-.4-.2t-.4.2l-1.9 2.475ZM8 18q-.825 0-1.413-.588T6 16V4q0-.825.588-1.413T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.588 1.413T20 18H8Zm0-2h12V4H8v12Zm-4 6q-.825 0-1.413-.588T2 20V7q0-.425.288-.713T3 6q.425 0 .713.288T4 7v13h13q.425 0 .713.288T18 21q0 .425-.288.713T17 22H4ZM8 4v12V4Z"
      ></path>
    </svg>
  );
}

export function DownloadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.713T12 4q.425 0 .713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062ZM6 20q-.825 0-1.413-.588T4 18v-2q0-.425.288-.713T5 15q.425 0 .713.288T6 16v2h12v-2q0-.425.288-.713T19 15q.425 0 .713.288T20 16v2q0 .825-.588 1.413T18 20H6Z"
      ></path>
    </svg>
  );
}

export function AviIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M128 0c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V128L352 0H128z"
        fill="#e2e5e7"
      />
      <path d="M384 128h96L352 0v96c0 17.6 14.4 32 32 32z" fill="#b0b7bd" />
      <path fill="#cad1d8" d="M480 224l-96-96h96z" />
      <path
        d="M416 416c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v160z"
        fill="#f15642"
      />
      <path
        d="M121.408 384.016c-4.096-2.32-6.656-6.912-4.096-12.288l36.72-71.76c3.456-6.784 12.656-7.04 15.856 0l36.08 71.76c5.248 9.968-10.24 17.904-14.848 7.92l-5.632-11.248h-47.2l-5.488 11.264c-2.048 4.352-6.784 5.248-11.392 4.352zm55.008-32.496l-14.464-31.6-15.728 31.6h30.192zm65.184 26.736l-33.776-70.736c-4.992-10.112 10.112-18.416 15.728-7.808l11.392 25.712 14.704 33.76 14.448-33.76 11.392-25.712c5.12-9.712 19.952-3.584 15.616 7.04l-32.624 71.504c-2.944 8.064-12.032 9.984-16.88 0zm65.28-75.104c0-10.48 16.896-10.88 16.896 0v73.04c0 10.624-16.896 10.88-16.896 0v-73.04z"
        fill="#fff"
      />
      <path
        d="M400 432H96v16h304c8.8 0 16-7.2 16-16v-16c0 8.8-7.2 16-16 16z"
        fill="#cad1d8"
      />
    </svg>
  );
}

export function DllIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M128 0c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V128L352 0H128z"
        fill="#e2e5e7"
      />
      <path d="M384 128h96L352 0v96c0 17.6 14.4 32 32 32z" fill="#b0b7bd" />
      <path fill="#cad1d8" d="M480 224l-96-96h96z" />
      <path
        d="M416 416c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v160z"
        fill="#576d7e"
      />
      <path
        d="M118.08 384c-4.224 0-8.832-2.32-8.832-7.936v-72.656c0-4.608 4.608-7.936 8.832-7.936h29.296c58.464 0 57.184 88.528 1.152 88.528H118.08zm8.064-72.928v57.312h21.232c34.544 0 36.08-57.312 0-57.312h-21.232zm82.464-7.92c0-4.224 3.584-7.808 8.064-7.808 4.096 0 7.552 3.6 7.552 7.808v64.096h34.8c12.528 0 12.8 16.752 0 16.752h-42.336c-4.48 0-8.064-3.184-8.064-7.808v-73.04h-.016zm74.944 0c0-4.224 3.584-7.808 8.064-7.808 4.096 0 7.552 3.6 7.552 7.808v64.096h34.8c12.528 0 12.8 16.752 0 16.752h-42.336c-4.48 0-8.064-3.184-8.064-7.808v-73.04h-.016z"
        fill="#fff"
      />
      <path
        d="M400 432H96v16h304c8.8 0 16-7.2 16-16v-16c0 8.8-7.2 16-16 16z"
        fill="#cad1d8"
      />
    </svg>
  );
}

export function EspIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M128 0c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V128L352 0H128z"
        fill="#e2e5e7"
      />
      <path d="M384 128h96L352 0v96c0 17.6 14.4 32 32 32z" fill="#b0b7bd" />
      <path fill="#cad1d8" d="M480 224l-96-96h96z" />
      <path
        d="M416 416c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v160z"
        fill="#f7b84e"
      />
      <path
        d="M116.608 384c-4.48 0-7.936-3.456-7.936-7.936v-72.656c0-4.608 3.456-7.936 7.936-7.936h45.92c11.776 0 11.52 16.624 0 16.624h-36.832v19.2h32.24c11.376 0 11.376 16.768 0 16.768h-32.24v19.184h39.024c11.648 0 12.528 16.752 0 16.752h-48.112zm73.872-80.848c0-4.224 3.328-8.848 8.704-8.848h29.552c16.64 0 31.616 11.136 31.616 32.496 0 20.224-14.976 31.472-31.616 31.472h-21.36v16.896c0 5.648-3.584 8.832-8.192 8.832-4.224 0-8.704-3.184-8.704-8.832v-72.016zm16.896 7.28v31.856h21.36c8.576 0 15.36-7.552 15.36-15.488 0-8.96-6.784-16.368-15.36-16.368h-21.36zm67.424 4.224c2.944-24.816 40.416-29.28 58.08-15.712 8.704 7.024-.512 18.16-8.192 12.528-9.472-6.016-30.96-8.832-33.648 4.464-3.456 20.992 52.192 8.976 51.296 42.992-.896 32.496-47.968 33.264-65.632 18.672-4.224-3.44-4.096-9.056-1.792-12.528 3.328-3.312 7.024-4.464 11.392-.896 10.48 7.168 37.488 12.544 39.408-5.648-1.664-18.912-54.88-7.52-50.912-43.872z"
        fill="#fff"
      />
      <path
        d="M400 432H96v16h304c8.8 0 16-7.2 16-16v-16c0 8.8-7.2 16-16 16z"
        fill="#cad1d8"
      />
    </svg>
  );
}

export function PdfIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M128 0c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V128L352 0H128z"
        fill="#e2e5e7"
      />
      <path d="M384 128h96L352 0v96c0 17.6 14.4 32 32 32z" fill="#b0b7bd" />
      <path fill="#cad1d8" d="M480 224l-96-96h96z" />
      <path
        d="M416 416c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v160z"
        fill="#f15642"
      />
      <path
        d="M101.744 303.152c0-4.224 3.328-8.832 8.688-8.832h29.552c16.64 0 31.616 11.136 31.616 32.48 0 20.224-14.976 31.488-31.616 31.488h-21.36v16.896c0 5.632-3.584 8.816-8.192 8.816-4.224 0-8.688-3.184-8.688-8.816v-72.032zm16.88 7.28v31.872h21.36c8.576 0 15.36-7.568 15.36-15.504 0-8.944-6.784-16.368-15.36-16.368h-21.36zM196.656 384c-4.224 0-8.832-2.304-8.832-7.92v-72.672c0-4.592 4.608-7.936 8.832-7.936h29.296c58.464 0 57.184 88.528 1.152 88.528h-30.448zm8.064-72.912V368.4h21.232c34.544 0 36.08-57.312 0-57.312H204.72zm99.152 1.024v20.336h32.624c4.608 0 9.216 4.608 9.216 9.072 0 4.224-4.608 7.68-9.216 7.68h-32.624v26.864c0 4.48-3.184 7.92-7.664 7.92-5.632 0-9.072-3.44-9.072-7.92v-72.672c0-4.592 3.456-7.936 9.072-7.936h44.912c5.632 0 8.96 3.344 8.96 7.936 0 4.096-3.328 8.704-8.96 8.704h-37.248v.016z"
        fill="#fff"
      />
      <path
        d="M400 432H96v16h304c8.8 0 16-7.2 16-16v-16c0 8.8-7.2 16-16 16z"
        fill="#cad1d8"
      />
    </svg>
  );
}

export function PngIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M128 0c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V128L352 0H128z"
        fill="#e2e5e7"
      />
      <path d="M384 128h96L352 0v96c0 17.6 14.4 32 32 32z" fill="#b0b7bd" />
      <path fill="#cad1d8" d="M480 224l-96-96h96z" />
      <path
        d="M416 416c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v160z"
        fill="#a066aa"
      />
      <path
        d="M92.816 303.152c0-4.224 3.312-8.848 8.688-8.848h29.568c16.624 0 31.6 11.136 31.6 32.496 0 20.224-14.976 31.472-31.6 31.472H109.68v16.896c0 5.648-3.552 8.832-8.176 8.832-4.224 0-8.688-3.184-8.688-8.832v-72.016zm16.864 7.28v31.856h21.376c8.56 0 15.344-7.552 15.344-15.488 0-8.96-6.784-16.368-15.344-16.368H109.68zm69.296-6c0-4.624 1.024-9.088 7.68-9.088 4.592 0 5.632 1.152 9.072 4.464l42.336 52.976v-49.632c0-4.224 3.696-8.848 8.064-8.848 4.608 0 9.072 4.624 9.072 8.848v72.016c0 5.648-3.456 7.792-6.784 8.832-4.464 0-6.656-1.024-10.352-4.464l-42.336-53.744v49.392c0 5.648-3.456 8.832-8.064 8.832s-8.704-3.184-8.704-8.832v-70.752h.016zM351.44 374.16c-9.088 7.536-20.224 10.752-31.472 10.752-26.88 0-45.936-15.36-45.936-45.808 0-25.84 20.096-45.92 47.072-45.92 10.112 0 21.232 3.456 29.168 11.264 7.808 7.664-3.456 19.056-11.12 12.288-4.736-4.624-11.392-8.064-18.048-8.064-15.472 0-30.432 12.4-30.432 30.432 0 18.944 12.528 30.448 29.296 30.448 7.792 0 14.448-2.304 19.184-5.76V348.08h-19.184c-11.392 0-10.24-15.632 0-15.632h25.584c4.736 0 9.072 3.6 9.072 7.568v27.248c0 2.288-1.008 4.448-3.184 6.896z"
        fill="#fff"
      />
      <path
        d="M400 432H96v16h304c8.8 0 16-7.2 16-16v-16c0 8.8-7.2 16-16 16z"
        fill="#cad1d8"
      />
    </svg>
  );
}

export function PsdIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M128 0c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V128L352 0H128z"
        fill="#e2e5e7"
      />
      <path d="M384 128h96L352 0v96c0 17.6 14.4 32 32 32z" fill="#b0b7bd" />
      <path fill="#cad1d8" d="M480 224l-96-96h96z" />
      <path
        d="M416 416c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v160z"
        fill="#50bee8"
      />
      <path
        d="M100 303.152c0-4.224 3.328-8.848 8.688-8.848h29.552c16.64 0 31.616 11.136 31.616 32.496 0 20.224-14.976 31.472-31.616 31.472h-21.36v16.896c0 5.648-3.584 8.832-8.192 8.832-4.224 0-8.688-3.184-8.688-8.832v-72.016zm16.88 7.28v31.856h21.36c8.576 0 15.36-7.552 15.36-15.488 0-8.96-6.784-16.368-15.36-16.368h-21.36zm67.44 4.224c2.944-24.816 40.416-29.28 58.08-15.712 8.704 7.024-.512 18.16-8.192 12.528-9.472-6.016-30.96-8.832-33.648 4.464-3.456 20.992 52.192 8.976 51.296 42.992-.896 32.496-47.968 33.264-65.632 18.672-4.24-3.44-4.096-9.056-1.792-12.528 3.328-3.312 7.024-4.464 11.392-.896 10.48 7.168 37.488 12.544 39.392-5.648-1.648-18.912-54.88-7.52-50.896-43.872zM278.24 384c-4.224 0-8.832-2.32-8.832-7.936v-72.656c0-4.608 4.608-7.936 8.832-7.936h29.296C366 295.472 364.72 384 308.688 384H278.24zm8.064-72.928v57.312h21.232c34.544 0 36.08-57.312 0-57.312h-21.232z"
        fill="#fff"
      />
      <path
        d="M400 432H96v16h304c8.8 0 16-7.2 16-16v-16c0 8.8-7.2 16-16 16z"
        fill="#cad1d8"
      />
    </svg>
  );
}

export function TxtIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M128 0c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V128L352 0H128z"
        fill="#e2e5e7"
      />
      <path d="M384 128h96L352 0v96c0 17.6 14.4 32 32 32z" fill="#b0b7bd" />
      <path fill="#cad1d8" d="M480 224l-96-96h96z" />
      <path
        d="M416 416c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v160z"
        fill="#576d7e"
      />
      <path
        d="M132.784 311.472H110.4c-11.136 0-11.136-16.368 0-16.368h60.512c11.392 0 11.392 16.368 0 16.368h-21.248v64.592c0 11.12-16.896 11.392-16.896 0v-64.592h.016zm91.632 14.704l22.272-27.888c6.656-8.688 19.568 2.432 12.288 10.752-7.68 9.088-15.728 18.944-23.424 29.024l26.112 32.496c7.024 9.6-7.04 18.816-13.952 9.344l-23.536-30.192-23.152 30.832c-6.528 9.328-20.992-1.152-13.68-9.856l25.696-32.624c-8.048-10.096-15.856-19.936-23.664-29.024-8.064-9.6 6.912-19.44 12.784-10.48l22.256 27.616zm73.872-14.704H275.92c-11.136 0-11.136-16.368 0-16.368h60.496c11.392 0 11.392 16.368 0 16.368h-21.232v64.592c0 11.12-16.896 11.392-16.896 0v-64.592z"
        fill="#fff"
      />
      <path
        d="M400 432H96v16h304c8.8 0 16-7.2 16-16v-16c0 8.8-7.2 16-16 16z"
        fill="#cad1d8"
      />
    </svg>
  );
}

export function ZipIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M128 0c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V128L352 0H128z"
        fill="#e2e5e7"
      />
      <path d="M384 128h96L352 0v96c0 17.6 14.4 32 32 32z" fill="#b0b7bd" />
      <path fill="#cad1d8" d="M480 224l-96-96h96z" />
      <path
        d="M416 416c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v160z"
        fill="#84bd5a"
      />
      <path
        d="M132.64 384c-8.064 0-11.264-7.792-6.656-13.296l45.552-60.512h-37.76c-11.12 0-10.224-15.712 0-15.712h51.568c9.712 0 12.528 9.184 5.632 16.624l-43.632 56.656h41.584c10.24 0 11.52 16.256-1.008 16.256h-55.28V384zm79.408-80.848c0-10.496 16.896-10.88 16.896 0v73.04c0 10.608-16.896 10.88-16.896 0v-73.04zm39.568 0c0-4.224 3.328-8.832 8.704-8.832h29.552c16.64 0 31.616 11.136 31.616 32.48 0 20.224-14.976 31.488-31.616 31.488h-21.36v16.896c0 5.632-3.584 8.816-8.192 8.816-4.224 0-8.704-3.184-8.704-8.816v-72.032zm16.88 7.28v31.872h21.36c8.576 0 15.36-7.568 15.36-15.504 0-8.944-6.784-16.368-15.36-16.368h-21.36z"
        fill="#fff"
      />
      <path
        d="M400 432H96v16h304c8.8 0 16-7.2 16-16v-16c0 8.8-7.2 16-16 16z"
        fill="#cad1d8"
      />
    </svg>
  );
}
