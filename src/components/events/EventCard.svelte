<script>
    import { onMount } from 'svelte';
    let observerInitialized = false;

    onMount(() => {
        if (!observerInitialized) {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate');
                    }
                });
            }, { threshold: [0.6, 0.5] });

            const cards = document.querySelectorAll('.cardBlob');
            cards.forEach(card => {
                observer.observe(card);
            });
            observerInitialized = true;
        }
    });
</script>
<div class="card relative overflow center column ">
    <div class="cardBg absolute"></div>
    <div class="cardBlob absolute"></div>
</div>
<!-- svelte-ignore css-unused-selector -->
<style>
    .center {
    align-items: center;
    justify-content: center;
}

.overflow {
    overflow: hidden;
}

.relative {
    position: relative;
}

.absolute {
    position: absolute;
}

.card {
    width: 40vh;
    height: 55vh;
    z-index: 100;
}


.column {
    flex-direction: column;
}

.cardBg {
    top: 5px;
    left: 5px;
    width: calc(40vh - 10px);
    height: calc(55vh - 10px);
    z-index: 2;
    background: rgba(25, 25, 25,1);
    backdrop-filter: blur(24px);
    outline: 2px solid rgba(20,20,20,.70);
}

.cardBlob {
    z-index: 1;
    top: 50%;
    left: 50%;
    width: calc(40vh - 50px);
    height: calc(55vh - 50px);
    border-radius: 50%;
    background-color: #8A2BE2;
    filter: blur(12px);
    opacity: 0;
    animation: blob-bounce 3s infinite linear;
}

.card:hover .cardBlob {
    opacity: 1;
}

.animate {
    opacity: 1;
}


@keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  
    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }
  
    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }
  
    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }
  
    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
</style>