<script>
  import { PreviewDoc } from "$lib/index.js";
  export let heading
  export let resources
</script>

<section>
  <h2>{heading}</h2>
  {#if resources.length > 0}
    {#each resources as resource}
      <div class="container-resource">
        <div class="resource-head">
          <div class="resource-svg">
            <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"  xml:space="preserve" width="20" height="20">
              <g>
                <rect x="115.774" y="335.487" width="194.387" height="18.588"/>
                <rect x="115.774" y="260.208" width="194.387" height="18.527"/>
                <rect x="115.774" y="184.862" width="194.387" height="18.588"/>
                <rect x="218.582" y="109.576" width="91.58" height="18.588"/>
                <path d="M385.112,396.188V39.614c0-2.294-0.197-4.603-0.592-6.768C381.3,14.19,365.006,0,345.438,0H184.686
                  c-11.561,0-22.598,4.603-30.741,12.747L53.637,112.986c-8.151,8.22-12.747,19.249-12.747,30.818v252.384
                  c0,21.802,17.806,39.607,39.683,39.607h264.864C367.308,435.795,385.112,417.99,385.112,396.188z M170.634,27.529v89.074
                  c0,9.662-3.745,13.399-13.339,13.399H68.222L170.634,27.529z M63.163,396.188V149.775h106.02c3.486,0,6.768-0.85,9.655-2.362
                  c4.079-2.036,7.361-5.324,9.328-9.328c1.519-2.894,2.302-6.115,2.302-9.526V22.272h154.97c7.156,0,13.331,4.33,15.959,10.574
                  c0.92,2.104,1.376,4.337,1.376,6.768v356.574c0,9.518-7.748,17.342-17.335,17.342H80.574
                  C70.98,413.53,63.163,405.706,63.163,396.188z"/>
                <path d="M431.488,76.205h-26.732l1.375,22.272h25.356c9.594,0,17.349,7.748,17.349,17.342v356.573
                  c0,9.519-7.755,17.342-17.349,17.342H166.562c-7.163,0-13.339-4.406-15.968-10.581c-0.85-2.097-1.374-4.33-1.374-6.761V456.89
                  h-22.272v15.503c0,2.294,0.198,4.589,0.593,6.761c3.22,18.588,19.515,32.846,39.022,32.846h264.926
                  c21.877,0,39.622-17.805,39.622-39.607V115.82C471.11,93.943,453.365,76.205,431.488,76.205z"/>
              </g>
            </svg>
          </div>
  
          <div class="resource-text">
            <p>{resource.directus_files_id.title}</p>
            <span>{resource.formattedFileSize}</span>
          </div>
        </div>

        <div class="resource-links">
          {#if resource.directus_files_id.type !== "application/zip"}
            <PreviewDoc id = {resource.directus_files_id.id}/>
          {/if}
          <a href="https://fdnd-agency.directus.app/assets/{resource.directus_files_id.id}?download" download="test" target="_blank" aria-label="download {resource.directus_files_id.title}">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.67213 10.2297L4.47541 7.03303L5.37049 6.10598L7.03278 7.76827V2.55762H8.31147V7.76827L9.97377 6.10598L10.8688 7.03303L7.67213 10.2297ZM3.83606 12.7871C3.48442 12.7871 3.1834 12.6619 2.93299 12.4115C2.68258 12.1611 2.55737 11.8601 2.55737 11.5084V9.5904H3.83606V11.5084H11.5082V9.5904H12.7869V11.5084C12.7869 11.8601 12.6617 12.1611 12.4113 12.4115C12.1609 12.6619 11.8598 12.7871 11.5082 12.7871H3.83606Z"/>
            </svg> 
          </a>
        </div>
      </div>
    {/each}
  {:else}
    <p>There are no documents linked</p>
  {/if}
</section>

<style>
  h2 {
    text-transform: capitalize;
  }

  .container-resource {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block: 1rem;
  }

  .resource-head {
    display: flex;
    gap: 1rem;
    width: 80%;
  }

  .resource-svg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    border-radius: var(--border-radius-sm);
    background-color: var(--accent-color-1);
  }

  .resource-svg svg {
    fill: var(--alt-text-color);
  }

  .resource-text {
    width: 70%;
  }

  .resource-text p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .resource-text span {
    font-weight: 100;
  }

  .resource-links a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: var(--primary-color);
    margin-right: .1rem;
    transition: .2s;
  }

  .resource-links a:hover {
    background-color: var(--hover-state-color);
  }
  
  .resource-links a path {
    fill: var(--alt-text-color);
  }

  @media only screen and (min-width: 370px) {
    .resource-links a {
      margin-left: .3rem;
    }
  }
</style>