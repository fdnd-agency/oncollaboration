<script>
  import { Arrow } from "$lib/index.js";
  import Button from "$lib/Bricks/Button.svelte";
</script>

<section>
  <Arrow />
  <div class="cta-container">
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

    <Button className="button" tag="a" label="Contourings" href="/contourings">
      {#snippet svgIcon({ width, height })}
        <svg
        class="svgIcon"
          role="img"
          aria-label="Call to action Contourings"
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
            fill="var(--cta-light-red)"
          />
          <rect
            width="76.6257"
            height="50.9391"
            rx="5"
            transform="matrix(0.260867 -0.96658 0.962781 0.265972 14 78.0649)"
            fill="var(--cta-pale-red)"
          />
          <path
            d="M46.453 56.6841C44.5459 54.6869 44.6138 51.5165 46.6045 49.6027L94.5971 3.46519C96.5879 1.55142 99.7476 1.61905 101.655 3.61623L129.951 33.2504C131.858 35.2476 131.79 38.418 129.799 40.3318L81.8067 86.4693C79.816 88.383 76.6562 88.3154 74.7492 86.3182L46.453 56.6841Z"
            fill="var(--cta-mid-red)"
          />
          <rect
            width="76.6257"
            height="50.9391"
            rx="5"
            transform="matrix(0.948091 -0.32164 0.315284 0.947779 75 37.6458)"
            fill="var(--cta-pale-red)"
          />
          <path
            d="M134.941 38.4015L131.366 39.5984C130.38 39.9285 129.314 39.3485 128.54 38.651C127.077 37.3381 124.588 36.9013 122.724 37.5253C121.539 37.9219 120.56 38.773 120.003 39.8912C119.445 41.0095 119.355 42.3034 119.752 43.4883C120.148 44.6731 120.999 45.6519 122.118 46.2092C123.236 46.7666 124.53 46.8569 125.715 46.4602C124.53 46.8569 123.551 47.7079 122.994 48.8262C122.436 49.9445 122.346 51.2384 122.743 52.4232C123.139 53.6081 123.99 54.5868 125.109 55.1442C126.227 55.7016 127.521 55.7918 128.706 55.3952C130.57 54.7712 132.296 52.9232 132.672 50.9929C132.87 49.9718 133.371 48.8652 134.357 48.5351L137.933 47.3383M99.5739 50.3178L103.148 49.1215C104.135 48.7908 104.637 47.6842 104.835 46.6632C105.21 44.7311 106.935 42.8854 108.801 42.2609C109.986 41.8642 111.28 41.9545 112.398 42.5119C113.516 43.0692 114.367 44.048 114.764 45.2328C115.161 46.4177 115.07 47.7116 114.513 48.8298C113.956 49.9481 112.977 50.7992 111.792 51.1958C112.977 50.7992 114.271 50.8895 115.389 51.4468C116.507 52.0042 117.358 52.983 117.755 54.1678C118.152 55.3527 118.061 56.6465 117.504 57.7648C116.947 58.8831 115.968 59.7342 114.783 60.1308C112.917 60.7554 110.428 60.3185 108.966 59.0033C108.193 58.3076 107.126 57.7258 106.139 58.0565L102.565 59.2528"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M112.846 31.0456C121.206 28.2469 125.386 26.8476 128.854 28.5742C132.32 30.305 133.719 34.4835 136.518 42.8438C139.316 51.2042 140.716 55.3843 138.989 58.8499C137.258 62.3185 133.08 63.7172 124.72 66.5159C116.359 69.3146 112.179 70.7139 108.713 68.9849C105.246 67.26 103.846 63.078 101.047 54.7177C98.2488 46.3573 96.8495 42.1771 98.5779 38.7092C100.303 35.2442 104.485 33.8442 112.846 31.0456Z"
            stroke="white"
            stroke-width="1.5"
          />
          <g filter="url(#filter0_d_1109_9864)">
            <path
              d="M4 40.2625H48.37C51.5444 40.2625 54.6731 41.018 57.4976 42.4668L74.2478 51.0581C77.0723 52.5069 80.2011 53.2625 83.3754 53.2625H168V133.262C168 138.785 163.523 143.262 158 143.262H14C8.47715 143.262 4 138.785 4 133.262V40.2625Z"
              fill="var(--cta-dark-red)"
            />
          </g>
          <path
            d="M136 118C135.448 118 135 118.448 135 119C135 119.553 135.448 120 136 120V118ZM153.707 119.708C154.098 119.317 154.098 118.684 153.707 118.293L147.343 111.929C146.953 111.539 146.319 111.539 145.929 111.929C145.538 112.32 145.538 112.953 145.929 113.344L151.586 119L145.929 124.657C145.538 125.048 145.538 125.681 145.929 126.072C146.319 126.462 146.953 126.462 147.343 126.072L153.707 119.708ZM136 119V120H153V119V118H136V119Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_1109_9864"
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
                result="effect1_dropShadow_1109_9864"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1109_9864"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      {/snippet}
    </Button>

    <Button className="button" tag="a" label="Doctors" href="/doctors">
      {#snippet svgIcon({ width, height })}
        <svg
        class="svgIcon"
          role="img"
          aria-label="Call to action doctors"
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
            fill="var(--cta-light-blue)"
          />
          <rect
            width="76.6257"
            height="50.9391"
            rx="5"
            transform="matrix(0.260867 -0.96658 0.962781 0.265972 13.9996 78.0649)"
            fill="var(--cta-pale-blue)"
          />
          <path
            d="M46.4534 56.6841C44.5464 54.6869 44.6143 51.5165 46.605 49.6027L94.5976 3.46519C96.5883 1.55142 99.7481 1.61905 101.655 3.61623L129.951 33.2504C131.858 35.2476 131.791 38.418 129.8 40.3318L81.8072 86.4693C79.8164 88.383 76.6567 88.3154 74.7497 86.3182L46.4534 56.6841Z"
            fill="var(--cta-mid-blue)"
          />
          <rect
            width="76.6257"
            height="50.9391"
            rx="5"
            transform="matrix(0.948091 -0.32164 0.315284 0.947779 75.0007 37.6458)"
            fill="var(--cta-pale-blue)"
          />
          <path
            d="M136.487 58.8116L135.217 54.3723C134.02 50.1875 133.421 48.0937 131.635 47.2585C129.85 46.4213 127.574 47.1684 123.025 48.6614L120.654 52.6768L116.591 50.7732C112.041 52.2663 109.765 53.0133 108.725 54.7776C107.683 56.5409 108.282 58.6347 109.479 62.8195L110.749 67.2587M126.242 47.6055L128.571 55.7442"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M114.046 51.4596L115.753 57.4288M115.753 57.4288C116.613 57.1464 117.528 57.1901 118.296 57.5501C119.064 57.9101 119.623 58.5571 119.849 59.3487L120.276 60.841M115.753 57.4288C114.893 57.7113 114.158 58.2965 113.71 59.056C113.262 59.8154 113.137 60.6867 113.363 61.4783L113.79 62.9706M122.623 38.0327L122.197 36.5403C122.001 35.8544 121.66 35.2234 121.193 34.6834C120.727 34.1433 120.144 33.7048 119.479 33.3928C118.813 33.0808 118.077 32.9015 117.314 32.8651C116.55 32.8287 115.773 32.9359 115.028 33.1806C114.283 33.4254 113.583 33.8028 112.97 34.2913C112.356 34.7799 111.841 35.3701 111.453 36.0281C111.064 36.6861 110.811 37.3992 110.707 38.1265C110.603 38.8539 110.65 39.5813 110.846 40.2672L111.273 41.7595C111.469 42.4454 111.81 43.0764 112.276 43.6165C112.743 44.1565 113.325 44.595 113.991 44.907C114.657 45.219 115.392 45.3983 116.156 45.4347C116.92 45.4711 117.696 45.3639 118.442 45.1192C119.187 44.8745 119.886 44.4971 120.5 44.0085C121.113 43.5199 121.629 42.9298 122.017 42.2717C122.405 41.6137 122.659 40.9006 122.763 40.1733C122.867 39.446 122.82 38.7186 122.623 38.0327ZM130.091 56.3942C130.175 56.691 130.129 57.0178 129.961 57.3026C129.793 57.5874 129.517 57.8068 129.194 57.9127C128.872 58.0186 128.529 58.0023 128.241 57.8673C127.953 57.7323 127.743 57.4897 127.658 57.1928C127.573 56.896 127.62 56.5692 127.788 56.2844C127.956 55.9997 128.232 55.7802 128.554 55.6743C128.877 55.5684 129.22 55.5847 129.508 55.7197C129.796 55.8547 130.006 56.0974 130.091 56.3942Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g filter="url(#filter0_d_1109_9884)">
            <path
              d="M4 40.2625H48.37C51.5444 40.2625 54.6731 41.018 57.4976 42.4668L74.2478 51.0581C77.0723 52.5069 80.2011 53.2625 83.3754 53.2625H168V133.262C168 138.785 163.523 143.262 158 143.262H14C8.47715 143.262 4 138.785 4 133.262V40.2625Z"
              fill="var(--cta-dark-blue)"
            />
          </g>
          <path
            d="M136 118C135.448 118 135 118.448 135 119C135 119.553 135.448 120 136 120V118ZM153.707 119.708C154.097 119.317 154.097 118.684 153.707 118.293L147.343 111.929C146.952 111.539 146.319 111.539 145.929 111.929C145.538 112.32 145.538 112.953 145.929 113.344L151.586 119L145.929 124.657C145.538 125.048 145.538 125.681 145.929 126.072C146.319 126.462 146.952 126.462 147.343 126.072L153.707 119.708ZM136 119V120H153V119V118H136V119Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_d_1109_9884"
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
                result="effect1_dropShadow_1109_9884"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1109_9884"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      {/snippet}
    </Button>

    <Button className="button" tag="a" label="" href="/">
      {#snippet svgIcon({ width, height })}
        <svg
        class="svgIcon"
          role="img"
          aria-label="Call to action doctors"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 172 148"
          fill="none"
            {width}
          {height}
        >
          <g opacity="0.2">
            <rect
              x="4"
              y="13.0005"
              width="164"
              height="130"
              rx="10"
              fill="var(--cta-dark-gray)"
            />
            <path
              d="M18.8139 79.3948C16.1553 78.6603 14.584 75.9012 15.3043 73.232L32.6848 8.83297C33.4051 6.16383 36.1444 4.59547 38.803 5.32993L78.2184 16.2186C80.8771 16.953 82.4483 19.7122 81.728 22.3813L64.3475 86.7804C63.6272 89.4495 60.888 91.0179 58.2293 90.2834L18.8139 79.3948Z"
              fill="var(--cta-light-gray)"
            />
            <path
              d="M46.453 56.6841C44.5459 54.6869 44.6138 51.5165 46.6045 49.6027L94.5971 3.46519C96.5879 1.55143 99.7476 1.61905 101.655 3.61623L129.951 33.2504C131.858 35.2476 131.79 38.418 129.799 40.3318L81.8067 86.4693C79.816 88.383 76.6562 88.3154 74.7492 86.3182L46.453 56.6841Z"
              fill="var(--cta-pale-gray)"
            />
            <rect
              width="76.6257"
              height="50.9391"
              rx="5"
              transform="matrix(0.948091 -0.32164 0.315284 0.947779 75 37.6458)"
              fill="var(--cta-light-gray)"
            />
            <g filter="url(#filter0_d_1042_768)">
              <path
                d="M4 40.2625H48.37C51.5444 40.2625 54.6731 41.018 57.4976 42.4668L74.2478 51.0581C77.0723 52.5069 80.2011 53.2625 83.3754 53.2625H168V133.262C168 138.785 163.523 143.262 158 143.262H14C8.47715 143.262 4 138.785 4 133.262V40.2625Z"
                fill="var(--cta-mid-gray)"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_1042_768"
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
                result="effect1_dropShadow_1042_768"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1042_768"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      {/snippet}
    </Button>
  </div>
</section>

<style>
    section {
        height: 400px;
    }

  .cta-container {
    display: grid;
    grid-template-columns: 140px 140px;
    grid-template-rows: 130px 130px;
    justify-content: center;
    justify-items: center;
    gap: 0.5em;
    grid-template-areas:
      "webinars contourings"
      "doctors empty";

      @media (min-width: 375px) {
        grid-template-columns: 170px 170px;
        grid-template-rows: 130px 130px;
      }

      @media (min-width: 425px) {
        grid-template-columns: 185px 185px;
        grid-template-rows: 160px 160px;
      }
    }

    .svgIcon {
        @media (min-width: 375px) {
          width: 170px;
          height: 170px;
        }

        @media (min-width: 425px) {
            width: 190px;
          height: 170px;
      }
    }
</style>
