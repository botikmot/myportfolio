<template>
  <div id="nav">
    <div class="bg-gray-100 h-16 pt-3 px-3">
      <div class="max-w-none mx-auto lg:max-w-7xl flex">
        <div class="flex w-1/3">
          <span>
            <img class="rounded flex items-center justify-center..." src="../../assets/img/rock.jpg" width="30" height="30"/>
          </span>
          <span class="font-semibold text-xl pl-3 pt-1 cursor-pointer"><router-link to="/">RoCkGonZ</router-link></span>
        </div>
        <div class="flex w-2/3 justify-end ... pt-2">
          <ul class="hidden md:flex">
            <li class="mr-12 pb-3">
              <router-link :class="`${pageURL === '/' ? 'text-blue-500' : 'text-gray-400'} hover:text-blue-800`" to="/">Home</router-link>
            </li>
            <li class="mr-12 pb-3">
              <router-link :class="`${pageURL === '/about' ? 'text-blue-500' : 'text-gray-400'} hover:text-blue-800`" to="/about">About</router-link>
            </li>
            <li class="mr-12 pb-3">
              <router-link :class="`${pageURL === '/skills' ? 'text-blue-500' : 'text-gray-400'} hover:text-blue-800`" to="/skills">Skills</router-link>
            </li>
            <li class="mr-12 pb-3">
              <router-link :class="`${pageURL === '/work' ? 'text-blue-500' : 'text-gray-400'} hover:text-blue-800`" to="/work">Work</router-link>
            </li>
            <li class="pb-3">
              <router-link :class="`${pageURL === '/contact' ? 'text-blue-500' : 'text-gray-400'} hover:text-blue-800`" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
        <div class="md:hidden">
          <button class="focus:outline-none focus:bg-gray-300" @click="toggleSidebar = !toggleSidebar">
            <img class="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div :class="`bg-blue-800 w-64 text-blue-100 h-100 absolute inset-y-0 left-0 transform ${toggleSidebar ? '-translate-x-full' : ''} transition duration-200 ease-in-out py-6 md:hidden`">
    <ul>
      <li @click="routes('/')" class="py-3 px-6 hover:bg-gray-700 cursor-pointer">Home</li>
      <li @click="routes('/about')" class="py-3 px-6 hover:bg-gray-700 cursor-pointer">About</li>
      <li @click="routes('/skills')" class="py-3 px-6 hover:bg-gray-700 cursor-pointer"><router-link to="/skills">Skills</router-link></li>
      <li @click="routes('/work')" class="py-3 px-6 hover:bg-gray-700 cursor-pointer"><router-link to="/work">Work</router-link></li>
      <li @click="routes('/contact')" class="py-3 px-6 hover:bg-gray-700 cursor-pointer"><router-link to="/contact">Contact</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggleSidebar: true
    }
  },
  computed: {
    pageURL() {
      return this.$route.path
    }
  },
  methods: {
    routes(params) {
      this.$router.push(params)
      this.toggleSidebar = true
    }
  }
}
</script>