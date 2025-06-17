<div class="arrow-container">
    <svg class="arrow bounce" role="img" aria-label="arrow" xmlns="http://www.w3.org/2000/svg" width="137" height="61" viewBox="0 0 137 61" fill="none">
    <path d="M118 21L68 40L18 21" stroke="#40BD93" stroke-width="3" stroke-linecap="round"/>
    </svg>
</div>

<style>
    .arrow-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .arrow {
        animation-duration: 2s;
        animation-iteration-count: infinite;
        transform-origin: bottom;
    }

    .bounce {
        animation-name: bounce;
        animation-timing-function: ease;
    }

    @keyframes bounce {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-10px); }
        100% { transform: translateY(0); }
    }
</style>