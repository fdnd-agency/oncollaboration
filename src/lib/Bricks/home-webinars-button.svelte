<script>
    import Button from "$lib/Bricks/Button.svelte";
</script>

<Button className="button" tag="a" label="Webinars" href="/webinars">
    {#snippet svgIcon({ width, height })}
        <svg
        class="svgIcon"
          role="img"
          aria-label="Call to action webinars"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 172 148"
          fill="none"
          {width}
          {height}
        >
          <rect
            x="4"
            y="13.0005"
            width="164"
            height="130"
            rx="10"
            fill="var(--cta-light-green)"
          />
          <rect
            width="76.6257"
            height="50.9391"
            rx="5"
            transform="matrix(0.260867 -0.96658 0.962781 0.265972 13.9996 78.0649)"
            fill="var(--cta-pale-green)"
          />
          <path
            d="M46.4534 56.6841C44.5464 54.6869 44.6143 51.5165 46.605 49.6027L94.5976 3.46519C96.5883 1.55142 99.7481 1.61905 101.655 3.61623L129.951 33.2504C131.858 35.2476 131.791 38.418 129.8 40.3318L81.8072 86.4693C79.8164 88.383 76.6567 88.3154 74.7497 86.3182L46.4534 56.6841Z"
            fill="var(--cta-mid-green)"
          />
          <rect
            width="76.6257"
            height="50.9391"
            rx="5"
            transform="matrix(0.948091 -0.32164 0.315284 0.947779 75.0007 37.646)"
            fill="var(--cta-pale-green)"
          />
          <path
            d="M127.519 46.8114C128.431 45.7051 127.924 44.0286 126.554 43.6205L115.022 40.1842C113.496 39.7294 112.074 41.1616 112.535 42.6885L116.391 55.44C116.853 56.9669 118.827 57.3596 119.843 56.1266L127.519 46.8114Z"
            fill="white"
          />
          <g filter="url(#filter0_d_1109_9875)">
            <path
              d="M4 40.2625H48.37C51.5444 40.2625 54.6731 41.018 57.4976 42.4668L74.2478 51.0581C77.0723 52.5069 80.2011 53.2625 83.3754 53.2625H168V133.262C168 138.785 163.523 143.262 158 143.262H14C8.47715 143.262 4 138.785 4 133.262V40.2625Z"
              fill="var(--cta-dark-green)"
            />
          </g>
          <path
            d="M136 118C135.448 118 135 118.448 135 119C135 119.553 135.448 120 136 120V118ZM153.707 119.708C154.097 119.317 154.097 118.684 153.707 118.293L147.343 111.929C146.952 111.539 146.319 111.539 145.929 111.929C145.538 112.32 145.538 112.953 145.929 113.344L151.586 119L145.929 124.657C145.538 125.048 145.538 125.681 145.929 126.072C146.319 126.462 146.952 126.462 147.343 126.072L153.707 119.708ZM136 119V120H153V119V118H136V119Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_1109_9875"
              x="0"
              y="36.2625"
              width="172"
              height="111"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1109_9875"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1109_9875"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
    {/snippet}
</Button>

<style>
    .svgIcon {
        @media (min-width: 23.438em) {
          width: 10.625em;
          height: 10.625em;
        }

        @media (min-width: 26.563em) {
          width: 11.5em;
          height: 10.625em;
      }

      @media (min-width: 90em) {
        width: 15.5em;
        height: 12.5em;    
      }
    }
</style>