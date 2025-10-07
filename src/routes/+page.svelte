<script>
    /** @type {{ data: import('./$types').PageData }} */
    let { data } = $props();

    const infoabout = data.about;
</script>

<section class="homepage-about">
    <h1 class="header-about">{infoabout.heading}</h1>
    <p class="info-about">{infoabout.text}</p>
    <a class="button-style" href="/about">More about oncollaboration<svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.864 10.4C11.024 10.0587 11.1787 9.76 11.328 9.504C11.488 9.248 11.6427 9.03467 11.792 8.864H2.464V8.192H11.792C11.6427 8.01067 11.488 7.792 11.328 7.536C11.1787 7.28 11.024 6.98667 10.864 6.656H11.424C12.096 7.43467 12.8 8.01067 13.536 8.384V8.672C12.8 9.03467 12.096 9.61067 11.424 10.4H10.864Z" fill="#00193F"/>
        </svg>
    </a>
    <img class="img-about" src="/images/doctors.png" alt="doctors">
</section>


<style>
    body {
        background-color: var(--neutral-color-lightest);
    }

    .homepage-about {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-inline: 12px;
        padding-top: 64px;

        @media ( min-width: 900px ) {
            display: grid;
            grid-template-columns: 0.8fr 1fr;
            grid-template-rows: 200px 300px 50px;
            column-gap: 32px;
        }

        @media ( min-width: 1000px ) {
            grid-template-rows: 150px 250px 50px;
        }

        @media ( min-width: 1200px ) {
            grid-template-columns: 480px 600px;
            justify-content: center;
        }
    }

    .header-about {
        max-width: 600px;    
        
        @media ( min-width: 900px ) {
            max-width: 480px;
        }
    }

    .info-about {
        max-width: 600px;
        line-height: 1.8;

        @media ( min-width: 900px ) {
            grid-column: 1/2;
            max-width: 480px;
        }
    }

    .button-style {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--primary-color-blue-dark-2);
        background-color: var(--primary-color-aqua-dark-3);
        width: clamp(260px, 100%, 600px);
        height: 2.5em;
        text-decoration: none;
        gap: 4px;
        border-radius: 7px;
        margin-top: 36px;

        @media ( min-width: 900px ) {
            grid-column: 1/2;
            max-width: 330px;
            margin-top: 0;
        }
    }

    .img-about {
        width: clamp(260px, 100%, 600px);
        margin-top: 40px;
        border-radius: 25px;

        @media ( min-width: 900px ) {
            grid-column: 2/3;
            grid-row: 2/3;
            margin-top: 0;
        }
        
    }

</style>    

