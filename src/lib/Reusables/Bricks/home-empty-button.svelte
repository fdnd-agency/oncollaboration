<script>
    import { Button } from "$lib/index.js";
</script>

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