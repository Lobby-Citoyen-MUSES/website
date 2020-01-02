<template>
  <main>
    <div :style="headerStyle"/>

    <h1>{{ article.title }}</h1>
    <time :datetime="article.publicationDate.toISOString()">Publié le {{ article.publicationDate.toLocaleString() }}</time><br/>
    <time :datetime="'PT' + article.reading_time + 'M'">{{ article.reading_time }} minutes</time>

    <prismic-rich-text :field="article.body[0].primary.text" />
  </main>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";

export default {
  name: "Publication",
  props: {},
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.summary
        }
      ]
    };
  },
  async asyncData({ context, error, req, route, params }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      let document = {};
      const result = await api.getByUID("article", route.params.uid);
      document = result;

      // Load the edit button
      // if (process.client) window.prismic.setupEditButton()

      return {
        article: { 
          id: document.id, 
          uid: document.uid, 
          publicationDate: new Date(document.first_publication_date),
          ...document.data 
        }
      };
    } catch (e) {
      throw e;
      // error({ statusCode: 404, message: 'Page not found' })
    }
  },
  data() {
    return {
      article: null
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: this.article
          ? `url(${this.article.header.url})`
          : `url(${this.header})`,
        height: "70vh"
      };
    }
  },
  methods: {}
};
</script>