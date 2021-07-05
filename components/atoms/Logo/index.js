import React from 'react'
import styled from 'styled-components'

const Root = styled.svg`
  g {
    transition: all 0.5s;
  }
`

export default React.memo(function Logo({fill = '#ffffff'}) {
  return (
    <Root
      viewBox="0 0 183 50"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="filter-1">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/>
        </filter>
      </defs>
      <g
        id="Design"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd">
        <g
          id="Desktop-HD_wireframes"
          transform="translate(-88 -50)">
          <g
            id="Logo_spaced"
            transform="translate(88 50)"
          >
            <g
              fill={fill}
              fillRule="nonzero">
              <path
                d="M86.188 31.762c-.992 3.376-4.083 6.183-8.876 6.183-5.35 0-10.067-3.844-10.067-10.424 0-6.222 4.597-10.266 9.593-10.266 6.023 0 9.63 3.845 9.63 10.108 0 .75-.08 1.546-.08 1.625H72.435c.118 2.576 2.299 4.44 4.915 4.44 2.457 0 3.805-1.23 4.438-2.974l4.4 1.308zm-4.916-6.375c-.08-1.942-1.347-3.845-4.36-3.845-2.735 0-4.24 2.062-4.36 3.845h8.72z"
                id="Shape"/>
              <path
                d="M89.763 37.351v-19.5h5.033v2.375c1.07-1.902 3.568-2.933 5.708-2.933 2.656 0 4.796 1.15 5.787 3.25 1.545-2.375 3.606-3.25 6.183-3.25 3.607 0 7.055 2.18 7.055 7.412v12.646h-5.113V25.778c0-2.102-1.03-3.687-3.448-3.687-2.26 0-3.607 1.75-3.607 3.845v11.415h-5.236V25.778c0-2.102-1.07-3.687-3.448-3.687-2.298 0-3.646 1.704-3.646 3.845v11.415h-5.269z"
                id="Path"/>
              <path
                d="M122.911 44.881V17.85h5.114v2.375c.875-1.506 3.051-2.815 5.985-2.815 5.708 0 9 4.36 9 10.148 0 5.904-3.686 10.264-9.195 10.264-2.695 0-4.678-1.07-5.625-2.375v9.433l-5.279.001zm10.068-22.75c-2.695 0-4.875 2.021-4.875 5.469 0 3.447 2.18 5.51 4.875 5.51s4.836-2.021 4.836-5.51c0-3.448-2.141-5.469-4.836-5.469z"
                id="Shape"/>
              <path
                d="M158.964 35.25c-1.07 1.824-3.329 2.616-5.39 2.616-4.717 0-7.413-3.449-7.413-7.69V17.85h5.273V29.1c0 2.18 1.108 3.924 3.566 3.924 2.339 0 3.686-1.585 3.686-3.844V17.85h5.272v15.974a32.17 32.17 0 00.198 3.527h-4.809c-.078-.396-.383-1.309-.383-2.101zM171.644 30.93c.118 1.545 1.267 2.973 3.566 2.973 1.75 0 2.576-.912 2.576-1.943 0-.875-.594-1.585-2.1-1.902l-2.576-.594c-3.766-.833-5.47-3.093-5.47-5.826 0-3.49 3.091-6.383 7.293-6.383 5.55 0 7.412 3.529 7.65 5.625l-4.4.991c-.158-1.15-.99-2.616-3.21-2.616-1.388 0-2.5.832-2.5 1.943 0 .95.713 1.544 1.783 1.743l2.775.595c3.845.793 5.786 3.125 5.786 5.984 0 3.171-2.457 6.421-7.57 6.421-5.866 0-7.887-3.805-8.125-6.024l4.522-.987zM61.197 17.85h3.928v4.677h-3.928v8.165c0 1.704.793 2.26 2.3 2.26a7.602 7.602 0 001.624-.16v4.36c-.476.2-1.427.477-2.972.477-3.806 0-6.184-2.26-6.184-6.025v-9.076h-3.528V17.85h8.76z"
                id="Path"/>
              <path
                d="M52.438 22.527V17.85c2.28 0 3.917-1.761 3.917-4.041v-.976h4.574v.976c0 4.802-3.689 8.719-8.492 8.719zM0 10.891A11.273 11.273 0 0010.891 0h8.318C19.017 10.506 10.506 19.017 0 19.209V10.89z"
                id="Path"/>
              <path
                d="M27.48 50c-10.625-.146-19.25-8.813-19.301-19.484-.052-10.671 8.5-19.416 19.125-19.658l.037 8.317c-6.07.228-10.864 5.23-10.837 11.303.028 6.074 4.868 11.032 10.94 11.204L27.48 50z"
                id="Path"/>
            </g>
          </g>
        </g>
      </g>
    </Root>
  )
})
