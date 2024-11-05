---
layout: home
sidebar: false
ads: false
editLink: false
---
<br />

# Menjadi Sponsor Math With Code

Math with code adalah proyek pembelajaran matematika yang dibuat bersama komunitas open source. Proyek ini diterbitkan di bawah lisensi MIT dan sepenuhnya gratis untuk digunakan. Kami berkomitmen untuk menyediakan materi pembelajaran yang berkualitas dan mudah dipahami.

Berbagai biaya yang dikeluarkan untuk memelihara proyek ini, seperti biaya hosting, domain, dan biaya lainnya, dibiayai oleh kontribusi sukarela dari sponsor. Kelebihan dana dari sponsor akan digunakan untuk memperluas cakupan materi pembelajaran, meningkatkan kualitas konten dan donasi kepada komunitas lain yang membutuhkan.

## Bagaimana Cara Menjadi Sponsor?

Sponsor dapat memberikan kontribusi melalui platform [GitHub Sponsors](https://github.com/sponsors/xirf). Kontribusi yang diberikan akan membantu kami dalam memelihara proyek ini dan meningkatkan kualitas konten yang kami berikan.

## Sponsor Non-Finansial

Selain kontribusi finansial, Anda juga dapat mendukung proyek Math with Code melalui berbagai cara seperti promosi dan partnership. Bentuk dukungan ini sangat membantu dalam meningkatkan visibilitas dan jangkauan proyek kami. Berikut adalah beberapa cara Anda dapat berkontribusi:

- **Promosi**: Membagikan proyek ini di media sosial, blog, atau platform lainnya untuk menjangkau lebih banyak orang.
- **Partnership**: Bekerja sama dengan kami dalam bentuk kolaborasi konten, webinar, atau acara lainnya yang dapat mendukung tujuan pembelajaran kami.
- **Materi Pembelajaran**: Berkontribusi dalam pembuatan materi pembelajaran, baik dalam bentuk penulisan artikel, video, atau materi pembelajaran lainnya.
- **Teknologi**: Memberikan akses atau dukungan teknologi yang dapat membantu dalam pengembangan proyek ini.
- **Lainnya**: Jika Anda memiliki ide lain yang dapat membantu proyek ini, jangan ragu untuk berbagi dengan kami.

Jika Anda tertarik untuk menjadi sponsor non-tunai, silakan hubungi kami melalui [email](mailto:contact@mathwithcode.tech) untuk mendiskusikan lebih lanjut bagaimana kita dapat bekerja sama.

## Sponsor Saat Ini

Berikut adalah daftar sponsor yang telah memberikan kontribusi kepada proyek Math with Code:

<script setup>
import sponsors from './.vitepress/sponsors';
</script>

<section class="w-full p-10 flex flex-wrap justify-center items-center gap-1">
  <template v-for="{ url, img, name } of sponsors?.special">
    <a :href="url" target="_blank" rel="sponsored noopener" class="decoration-none! w-full md:w-fit">
      <div
        class="bg-base-soft p-2 w-full md:w-82 h-36 flex items-center justify-center object-contain relative opacity-90 transform transition-transform duration-300 ease-in-out hover:opacity-100 hover:-translate-y-1">
        <img :src="img" :alt="name" class="transition-all duration-300 h-full object-contain" />
      </div>
    </a>
  </template>
</section>
