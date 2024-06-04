<script>
    export let icon;
    export let description;
    export let title;
  </script>
  
  <div class="infoCard flex">
    <div class="icon flex aic jcc">
      <i class="fa-solid fa-{icon}"></i>
    </div>
    <div class="info flex fdc jcsb">
      <div class="infoText">{description}</div>
      <div class="infoDescription">{title}</div>
    </div>
  </div>
  
  <style>
    .infoCard {
      width: 100%;
      padding: 0.7rem 1rem;
      margin: 0.5rem;
      border-radius: 10px;
      background-color: rgba(16, 18, 27, 0.5);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .infoCard:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 11px rgba(255, 215, 0, 0.4);
    }
  
    .icon {
      margin-right: 2rem;
    }
  
    .info {
      width: 80%;
      min-height: 15%;
    }
  
    .infoDescription {
      font-size: 0.8rem;
    }
  </style>