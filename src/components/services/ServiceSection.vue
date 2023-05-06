<template>
  <section class="cards" id="services">
    <h2 class="title">Services</h2>

    <div class="content">
      <div class="card">
        <div class="icon"><i class="fa-solid fa-book"></i></div>
        <div class="info">
          <h3>{{$t('Services.S1.Name')}}</h3>
          <p>
            {{$t('Services.S1.Description')}}<br />
            <span>{{$t('Services.S1.Price')}}</span>
          </p>
        </div>
      </div>

      <div class="card">
        <div class="icon"><i class="fa-solid fa-video"></i></div>
        <div class="info">
          <h3>{{$t('Services.S2.Name')}}</h3>
          <p>
            {{$t('Services.S2.Description')}}<br />
            <span>{{$t('Services.S2.Price')}}</span>
          </p>
        </div>
      </div>

      <div class="card">
        <div class="icon"><i class="fa-brands fa-discord"></i></div>
        <div class="info">
          <h3>{{$t('Services.S3.Name')}}</h3>
          <p>
            {{$t('Services.S3.Description')}}<br />
            <span>{{$t('Services.S3.Price')}}</span>
          </p>
        </div>
      </div>

      <div class="card">
        <div class="icon"><i class="fa-solid fa-lock"></i></div>
        <div class="info">
          <h3>{{$t('Services.S4.Name')}}</h3>
          <p>
            {{$t('Services.S4.Description')}}<br />
            <span>{{$t('Services.S4.Price')}}</span>
          </p>
        </div>
      </div>

      <div class="card">
        <div class="icon"><i class="fa-solid fa-rectangle-ad"></i></div>
        <div class="info">
          <h3>{{$t('Services.S5.Name')}}</h3>
          <p>
            {{$t('Services.S5.Description')}}<br />
            <span>{{$t('Services.S5.Price')}}</span>
          </p>
        </div>
      </div>

      <div class="card">
        <div class="icon"><i class="fa-solid fa-object-group"></i></div>
        <div class="info">
          <h3>{{$t('Services.S6.Name')}}</h3>
          <p>
						{{$t('Services.S6.Description')}}<br />
            <span>{{$t('Services.S6.Price')}}</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
