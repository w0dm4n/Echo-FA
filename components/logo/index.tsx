import { APP_NAME } from "@/config/app"
import s from "./logo.module.scss"

interface LogoProps {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <svg className={className} viewBox="0 0 319 349">
      <title>{APP_NAME}</title>
      <path
        data-illu
        d="M128.265 94.062l-.486-2.157-2.656 2.711 6.284 23.808-16.118 29.69 17.874-30.705-5.545-22.332.647-1.015zm14.694 6.367s2.925-13.472 2.85-15.318c0 0-4.514 6.459-2.85 15.318zm73.116-5.813l-2.656-2.711-.486 2.157.647 1.015-5.544 22.332 17.875 30.705-16.12-29.69 6.284-23.808zm20.238-81.114l-8.132 9.597-1.663-2.215-8.687 26.576s2.588 2.03 0 11.627l-7.034 26.023-1.118 1.021-10.827-10.895s-2.48-4.415-7.053-8.615c-4.147-3.809-10.013-7.441-17.31-7.441l-.37-4.245-3.45-.351v-.015l-.07.007-.071-.007v.015l-3.45.351-.37 4.245c-7.297 0-13.163 3.632-17.31 7.441-4.573 4.201-7.053 8.615-7.053 8.615l-10.827 10.895-1.118-1.021-7.034-26.023c-2.588-9.597 0-11.627 0-11.627l-8.687-26.576-1.663 2.215-8.132-9.597 32.898 111.658-9.518-40.988 4.343 4.631 2.033-2.215s1.109 18.825 4.62 24.73l.74 12.735 9.241 15.318-8.225-15.593-.462-13.383s-2.403-.738-3.511-10.15-1.479-14.765-1.479-14.765l6.469-6.459s-1.109 5.721-.555 12.181c0 0 4.99-22.147 23.472-25.1V62.57s-8.501 1.133-13.491 5.563-8.502 12.919-8.502 12.919l-.185-4.614-10.35 10.52-.904-.825 10.515-9.879c.924-.738.739.184.739.184s2.218-6.09 9.056-11.258c7.763-5.537 13.954-5.075 13.954-5.075l.656 8.091s-8.049 1.506-12.854 5.751c0 0 8.334-4.186 12.854-4.4l.823 5.692 3.338-.465 3.337.465.823-5.692c4.519.214 12.854 4.4 12.854 4.4-4.805-4.245-12.854-5.751-12.854-5.751l.656-8.091s6.191-.461 13.954 5.075c6.838 5.168 9.056 11.258 9.056 11.258s-.185-.923.739-.184 10.515 9.879 10.515 9.879l-.904.825-10.35-10.52-.185 4.614s-3.511-8.49-8.501-12.919-13.492-5.563-13.492-5.563v3.532c18.482 2.953 23.472 25.1 23.472 25.1.554-6.46-.555-12.181-.555-12.181l6.469 6.459s-.37 5.352-1.478 14.765-3.512 10.15-3.512 10.15l-.462 13.383-8.225 15.593 9.241-15.318.74-12.735c3.511-5.906 4.62-24.73 4.62-24.73l2.033 2.215 4.343-4.631-9.518 40.988 32.898-111.658zM195.39 85.111c-.077 1.846 2.85 15.318 2.85 15.318 1.664-8.859-2.85-15.318-2.85-15.318zm38.255 35.406l12.168 26.392s5.377.78 7.862 7.494c1.377.442 27.171 7.455 27.171 7.455l16.349 1.015-41.681-11.074-10.719-18.456 2.033 6.275-13.183-19.101z M63.92 168.498c1.137-.55 47.897-14.392 47.897-14.392l10.904-18.825-1.848 6.275 12.752-18.64-12.329 26.115-2.549.738-4.897 7.191-22.096 6.893-27.836 4.645h.002zm110.096-39.418s1.508-29.893 0-31.177l-3.345 2.949-3.346-2.949c-1.508 1.286 0 31.177 0 31.177l-17.11-19.639v6.094l17.11 21.526-.063 6.896 3.397 12.571v.072l.012-.037.011.037v-.072l3.334-12.571v-6.896l17.11-21.526v-6.094l-17.11 19.639zm-3.357-30.319l.011-.011.012.011v-.022l4.219-4.245-1.654-9.32-2.577 2.407-2.576-2.407-1.654 9.32 4.219 4.245v.022z M192.675 160.104c5.939.966 6.839 5.537 6.839 5.537s.924-4.614 4.99-7.382 5.914-2.953 5.914-2.953l23.287-5.721s3.697-.554 7.393 1.107 7.023 5.537 7.948 8.49 1.863 5.754.469 10.536l-9.895 32.835s-2.403 6.275-2.957 7.198-3.327 5.167-6.284 6.644-19.591 6.828-19.591 6.828l-11.274 2.953s-2.403.554-4.991-.184-3.511-1.477-3.511-1.477l-7.947 2.03-.595-.9 8.924-2.285s2.357 3.344 11.522 1.142l25.984-8.105s7.023-3.322 10.165-14.211l10.35-34.513s1.109-7.382-4.066-12.55-9.426-4.983-11.274-4.798-23.657 5.906-23.657 5.906-6.504 1.917-9.241 7.382c-1.109 2.215-1.479 4.245-1.479 4.245s-2.023-7.198-9.98-7.198c-3.511 0-12.013 1.846-12.013 1.846s10.997-3.046 14.97-2.4v-.002z M153.124 230.79l-9.796 2.215s-2.218.185-4.066 5.721c-1.959 5.871-30.31 103.538-30.31 103.538l23.472-61.458 4.805-4.061 15.895-45.955zM52.363 240.952s-.521 1.65-5.327 2.757l-37.334 9.044 38.997-8.281s3.26-.556 3.663-3.52z M22.918 185.85c.555.185 41.954 1.477 41.954 1.477l-4.066 12.365-1.663.369 3.419-10.058-39.644-4.153zm35.301 17.683l1.478-.334-7.485 22.424 6.007-22.09z"
        className={s.primary}
      />
      <path
        data-illu
        d="M224.241 108.618l-6.085 11.578 10.979-17.022-4.894 5.444zm3.134 0l-8.59 11.72 6.838-6.829 1.752-4.891zm-110.966-.738l6.084 11.577-10.978-17.022 4.894 5.445zm-3.134 0l8.59 11.719-6.838-6.828-1.752-4.891z M255.762 184.143l-5.238 13.611 47.314-14.58-44.726 11.258 2.65-10.289zm2.159-16.472l-6.085 11.58 10.979-17.024-4.894 5.444zm3.134 0l-8.59 11.72 6.838-6.829 1.752-4.891z M203.395 241.864l1.294-4.245 39.459-8.582-38.905 9.136-1.848 3.691z M132.283 289.151l2.174-6.131 4.436-2.768 18.297-49.462 11.939 31.765 13.341-36.91.595.901-13.936 41.082-11.939-29.13-9.056 22.56 11.227 28.093-11.967-26.247-7.618 19.286-4.395 2.307-3.098 4.654z M66.72 199.508l-53.84 12.504 53.531-11.397.309-1.107z M28.647 258.382l102.945-23.255-8.317 25.1 4.436 10.336-6.007-10.428 6.839-21.778-99.896 20.025zm95.09 9.874l2.218 5.906-11.089 25.469 8.132-26.577.739-4.798z"
        className={s.secondary}
      />
      <path
        d="M205.428 233.559l5.206-20.422 17.804-4.401-2.125 5.629-11.459 3.137-.739 3.138 7.947-2.031-1.386 4.707-7.486 1.938-1.755 6.921-6.007 1.384zm24.673-25.008l-6.284 20.855 6.284-1.476 2.957-8.859 6.839-1.661-2.403 9.043 6.099-1.476 5.36-21.778-18.852 5.352zm10.72 4.245l-6.838 1.845.924-3.322 7.023-1.661-1.109 3.138z M32.344 175.331c.739 0 52.489-11.443 52.489-11.443s6.654-1.107 9.241.923l60.251-15.503s-19.591 18.64-21.07 19.378c-.201.1-.517.541-58.669 12.55 0 0 .821-4.429-.473-4.429s-41.769-1.476-41.769-1.476z M73.189 185.481s-14.601 53.522-18.482 57.398l60.621-12.365s-15.71-.739-10.72-12.735l-29.109 6.736 4.066-12.919 32.529-21.778-28.093 5.722 4.621-14.396-15.433 4.337zm83.631-26.299l-16.079 15.687-17.373 4.245s-4.806 1.292-6.284 6.09l-9.796 33.405c-1.109 3.692 1.109 8.258 6.192 7.267s28.37-6.344 28.37-6.344l3.511-11.442-24.396 5.721 7.947-26.576 8.687-2.031-2.957 10.336 7.762-1.846s4.436-.923 5.914-5.721l8.502-28.791zm9.518-13.381l-24.765 82.129 11.274-2.769s3.142-.553 5.729-9.412l11.274-38.204 13.492-2.953-19.591 64.227 5.36 13.841 10.35-31.005 14.97-3.692s-10.997-5.259-8.224-12.826l10.35-34.513s.739-2.768-1.294-4.798-4.805-2.584-9.241-1.661l-12.753 2.584-.831 1.937-6.1-22.885zm73.282 8.767c-3.142-1.661-5.36-.923-5.36-.923l-24.027 5.906s-2.957.923-4.62 2.768-2.403 4.245-2.403 4.245l-11.644 39.311s-.961 3.363 1.664 5.721c1.848 1.661 5.544.739 5.544.739l23.472-5.722s2.773-.553 4.991-2.768 3.511-6.829 3.511-6.829l10.905-36.542s1.109-4.245-2.033-5.906zm-21.809 41.894l-11.644 2.953 9.241-30.267 11.644-2.769-9.241 30.083z"
        className={s.text}
      />
    </svg>
  )
}
