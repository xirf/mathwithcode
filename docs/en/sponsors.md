---
layout: home  
sidebar: false  
ads: false  
editLink: false  
---  
<br />  
<br />

# Support Math With Code

## About Us

Math With Code is an open-source math learning platform committed to providing quality education for free to everyone. We believe that mathematical knowledge should be accessible to anyone without financial barriers.

## Why Become a Sponsor?

By becoming a sponsor, you contribute to:

-   Ensuring that content remains free and ad-free
-   Supporting the development of new learning materials
-   Helping with operational costs (hosting, domain, etc.)
-   Encouraging innovation in math education

## How to Contribute

### Financial Support

Financial support can be given through:

-   [Github Sponsor](https://github.com/sponsors/xirf)
-   [Patreon](https://patreon.com/xirf)
-   [Trakteer](https://trakteer.id/xirf) (for users in Indonesia)

### Non-Financial Support

1. **Content Collaboration**

    - Writing articles or tutorials
    - Creating educational videos
    - Translating content

2. **Technical Support**

    - Code review
    - Bug fixing
    - Infrastructure improvements

3. **Marketing & Outreach**
    - Promoting on social media
    - Writing reviews
    - Organizing workshops

## Our Sponsors

<script setup>  
import sponsors from '../.vitepress/sponsors';  
</script>

<section class="w-full p-10 flex flex-wrap justify-center items-center gap-1">  
  <template v-for="{ url, img, name } of sponsors?.special">  
    <a :href="url" target="_blank" rel="sponsored noopener" class="decoration-none! w-full md:w-fit">  
      <div class="bg-base-soft p-2 w-full md:w-82 h-36 flex items-center justify-center object-contain relative opacity-90 transform transition-transform duration-300 ease-in-out hover:opacity-100 hover:-translate-y-1">  
        <img :src="img" :alt="name" class="transition-all duration-300 h-full object-contain" />  
      </div>  
    </a>  
  </template>  
</section>

## 📬 Contact Us

Interested in becoming a sponsor or have collaboration ideas? Contact us at:

-   Email: [contact@mathwithcode.tech](mailto:contact@mathwithcode.tech)
-   GitHub: [github.com/xirf](https://github.com/xirf)

---

<small>*Math With Code is committed to transparency in the use of sponsor funds. Reports on fund usage will be shared periodically with sponsors.</small>