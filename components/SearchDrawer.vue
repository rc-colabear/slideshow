<template>
  <div>
    <div class="ma-2">
      <v-row align="center" dense>
        <v-col>
          <v-text-field
            v-model="tagFilter"
            autocomplete="off"
            :autofocus="$vuetify.breakpoint.mdAndUp"
            hide-details
            placeholder="Filter tags"
            solo-inverted
            style="font-size: 1.5rem"
          />
        </v-col>
        <v-col cols="auto">
          <v-btn icon outlined @click="onHideNav"><v-icon small>mdi-chevron-double-right</v-icon></v-btn>
        </v-col>
      </v-row>
    </div>

    <v-divider class="my-2" />

    <v-row align="center" class="mx-2" dense>
      <v-col class="overline" cols="auto">Match:</v-col>
      <v-col>
        <v-btn-toggle class="mx-0 px-0" color="success" :value="searchType" @change="changeSearchType">
          <v-btn small :value="0">any tag</v-btn>
          <v-btn small :value="1">all tags</v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>

    <groupped-tags :filter="tagFilter" :selected-tags.sync="selectedTags" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { popularTags } from '~/util/tags';
import GrouppedTags from '~/components/GrouppedTags';

export default {
  components: {
    GrouppedTags,
  },

  data () {
    return {
      tagFilter: '',
      selectedTags: {
        ...Object.keys(popularTags).reduce((tags, group) => Object.assign(tags, { [group]: [] }), {}),
        All: [],
      },
    };
  },

  computed: {
    ...mapState({
      tag_nav: state => state.tag_nav,
      tags: state => state.tags.tags,
    }),
    allTags () {
      return {
        ...popularTags,
        All: this.tags.filter(tag => {
          return !Object.keys(popularTags).some(group => popularTags[group].includes(tag));
        }),
      };
    },
    searchType () {
      return this.$route.query.type === '1' ? 1 : 0;
    },
    search () {
      return this.$route.query.search || '';
    },
  },

  watch: {
    '$route.fullPath': {
      immediate: true,
      handler () {
        this.setSelectedTags();
      },
    },
    selectedTags: {
      deep: true,
      handler () {
        const searchtag = this.generateSearchTag();

        this.$router.push({
          path: `/photo-browse?search=${searchtag}&type=${this.searchType}`,
        });
      },
    },
  },

  methods: {
    setSelectedTags () {
      const searchTags = this.search.split('-');

      if (this.search) {
        for (const group in this.selectedTags) {
          searchTags.forEach(tag => {
            const index = this.allTags[group].indexOf(tag);

            if (index !== -1 && this.selectedTags[group].indexOf(index) === -1) {
              this.selectedTags[group].push(index);
            }
          });
        }
      } else {
        for (const group in this.selectedTags) {
          this.selectedTags[group] = [];
        }
      }
    },
    changeSearchType () {
      this.$router.push({
        path: `/photo-browse?search=${this.search}&type=${1 - this.searchType}`,
      });
    },
    generateSearchTag () {
      const searchTagsArray = [];

      for (const group in this.selectedTags) {
        const selectedIndices = this.selectedTags[group];
        const groupTags = this.allTags[group];

        searchTagsArray.push(...selectedIndices.map(index => groupTags[index]));
      }

      return searchTagsArray.join('-');
    },
    onHideNav () {
      this.$store.commit('set_tag_nav', false);
    },
  },
};
</script>
