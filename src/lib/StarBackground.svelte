<script>
    const stars = Array.from({ length: 50 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2
    }));
</script>

<div class="star-bg">
    <div class="star-container">
        {#each stars as star}
            <div 
                class="star"
                style="
                    left: {star.left}%; 
                    top: {star.top}%; 
                    width: {star.size}px; 
                    height: {star.size}px; 
                    animation-delay: {star.delay}s;
                    animation-duration: {star.duration}s;
                "
            ></div>
        {/each}

        <!-- Shooting Stars -->
        <div class="shooting-star"></div>
        <div class="shooting-star" style="top: 30%; left: 80%; animation-delay: 2s;"></div>
        <div class="shooting-star" style="top: 60%; left: -10%; animation-delay: 4.5s;"></div>
    </div>
</div>

<style>
    .star-bg {
        position: fixed;
        inset: 0;
        z-index: -1;
        background: linear-gradient(to top, #020617, #0f172a, #1e1b4b);
        overflow: hidden;
    }

    .star-container {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .star {
        position: absolute;
        background: white;
        border-radius: 50%;
        opacity: 0.3;
        box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
        animation: twinkle infinite alternate;
    }

    @keyframes twinkle {
        0% { opacity: 0.2; transform: scale(0.8); }
        100% { opacity: 0.8; transform: scale(1.2); }
    }

    .shooting-star {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 4px;
        height: 4px;
        background: #fff;
        border-radius: 50%;
        box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1), 
                    0 0 0 8px rgba(255, 255, 255, 0.1), 
                    0 0 20px rgba(255, 255, 255, 1);
        animation: shoot 6s linear infinite;
        opacity: 0;
    }

    .shooting-star::before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 200px;
        height: 1px;
        background: linear-gradient(90deg, rgba(255,255,255,1), transparent);
        right: 1px;
    }

    @keyframes shoot {
        0% { transform: rotate(-45deg) translateX(0); opacity: 1; }
        20% { transform: rotate(-45deg) translateX(-100vw); opacity: 0; }
        100% { transform: rotate(-45deg) translateX(-100vw); opacity: 0; }
    }
</style>