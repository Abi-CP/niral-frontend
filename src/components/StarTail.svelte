<script>
    import { onMount, onDestroy } from "svelte";
  
  
    function initializeStarAnimation() {
      const originPosition = { x: 0, y: 0 };
  
      const last = {
        starTimestamp: new Date().getTime(),
        starPosition: originPosition,
        mousePosition: originPosition,
      };
  
      const config = {
        starAnimationDuration: 1500,
        minimumTimeBetweenStars: 250,
        minimumDistanceBetweenStars: 75,
        glowDuration: 75,
        maximumGlowPointSpacing: 10,
        colors: ["249 146 253", "252 254 255"],
        sizes: ["1rem", "0.75rem", "0.45rem"],
        animations: ["fall-1", "fall-2", "fall-3"],
      };
  
      let count = 0;
  
      const rand = (min, max) =>
          Math.floor(Math.random() * (max - min + 1)) + min,
        selectRandom = (items) => items[rand(0, items.length - 1)];
  
      const px = (value) => `${value}px`,
        ms = (value) => `${value}ms`;
  
      const calcDistance = (a, b) =>
        Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
  
      const appendElement = (element) => document.body.appendChild(element),
        removeElement = (element, delay) =>
          setTimeout(() => document.body.removeChild(element), delay);
  
      const createStar = (position) => {
        const star = document.createElement("span"),
          color = selectRandom(config.colors);
  
        star.className = "star bx bxs-star";
  
        star.style.left = px(position.x);
        star.style.top = px(position.y);
        star.style.fontSize = selectRandom(config.sizes);
        star.style.color = `rgb(${color})`;
        star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
        star.style.animationName = config.animations[count++ % 3];
        star.style.animationDuration = ms(config.starAnimationDuration);
  
        appendElement(star);
  
        removeElement(star, config.starAnimationDuration);
      };
  
      const createGlowPoint = (position) => {
        const glow = document.createElement("div");
  
        glow.className = "glow-point";
  
        glow.style.left = px(position.x);
        glow.style.top = px(position.y);
  
        appendElement(glow);
  
        removeElement(glow, config.glowDuration);
      };
  
      const determinePointQuantity = (distance) =>
        Math.max(Math.floor(distance / config.maximumGlowPointSpacing), 1);
  
      const createGlow = (last, current) => {
        const distance = calcDistance(last, current),
          quantity = determinePointQuantity(distance);
  
        const dx = (current.x - last.x) / quantity,
          dy = (current.y - last.y) / quantity;
  
        Array.from(Array(quantity)).forEach((_, index) => {
          const x = last.x + dx * index,
            y = last.y + dy * index;
  
          createGlowPoint({ x, y });
        });
      };
  
      const createTailPoint = (position) => {
        const tail = document.createElement("div");
  
        tail.className = "tail-point";
  
        tail.style.left = px(position.x);
        tail.style.top = px(position.y);
  
        appendElement(tail);
  
        removeElement(tail, 500);
      };
  
      const createTail = (last, current) => {
        const distance = calcDistance(last, current),
          quantity = determinePointQuantity(distance);
  
        const dx = current.x - last.x,
          dy = current.y - last.y;
  
        Array.from(Array(quantity)).forEach((_, index) => {
          const x = last.x + dx * index,
            y = last.y + dy * index;
  
          createTailPoint({ x, y });
        });
      };
  
      const updateLastStar = (position) => {
        last.starTimestamp = new Date().getTime();
  
        last.starPosition = position;
      };
  
      const updateLastMousePosition = (position) => {
        last.mousePosition = position;
  
        // console.log(last.mousePosition);
      };
  
      const adjustLastMousePosition = (position) => {
        if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
          last.mousePosition = position;
        }
        last.mousePosition = position;
      };
  
      const handleOnMove = (e) => {
        const mousePosition = { x: e.clientX, y: e.clientY };
  
        adjustLastMousePosition(mousePosition);
  
        const now = new Date().getTime(),
          hasMovedFarEnough =
            calcDistance(last.starPosition, mousePosition) >=
            config.minimumDistanceBetweenStars,
          hasBeenLongEnough =
            now - last.starTimestamp > config.minimumTimeBetweenStars;
  
        if (hasMovedFarEnough || hasBeenLongEnough) {
          createStar(mousePosition);
  
          updateLastStar(mousePosition);
        }
  
        createGlow(last.mousePosition, mousePosition);
        createTail(last.mousePosition, mousePosition);
  
        updateLastMousePosition(mousePosition);
      };
  
      window.addEventListener("mousemove", handleOnMove);
  
      window.addEventListener("touchmove", (e) => handleOnMove(e.touches[0]));
  
      document.body.addEventListener("mouseleave", () =>
        updateLastMousePosition(originPosition)
      );
    }
  
    onMount(() => {
      initializeStarAnimation();
    });
    onDestroy(() => {
    // Remove event listeners here
    window.removeEventListener("mousemove",()=>{});
    window.removeEventListener("touchmove", ()=>{});
    document.body.removeEventListener("mouseleave", ()=>{});
  });
  </script>
  
  