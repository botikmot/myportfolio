<template>
  <div class="about max-w-none mx-auto lg:max-w-6xl">
    <div class="mt-6 sm:mt-24 text-center text-4xl font-black">About Me</div>
    <div class="mt-3 text-center text-gray-400 text-lg pb-6">My introduction</div>
    <div class="h-full grid grid-rows-1 sm:grid-flow-col sm:grid-cols-2 mt-12">
      <div class="p-6 sm:p-0">
        <img class="rounded-lg mx-auto" src="../assets/img/rockgons.jpg" />
      </div>
      <div class="text-lg text-gray-400 text-justify">
        <p class="px-6 sm:px-0">I am Rocky Gonzales, Web Developer/IT Specialist with knowledge and years of experience, working in web technologies, delivering quality work.</p>
        <div class="mt-12 grid grid-rows-1 grid-flow-col grid-cols-3 text-center text-black text-3xl">
          <div class="flex-wrap">
            <span class="font-black">02+</span>
            <div class="text-base w-1/2 text-gray-400 mx-auto pt-3">Years experience</div>
          </div>
          <div>
            <span class="font-black">08+</span>
            <div class="text-base w-1/2 text-gray-400 mx-auto pt-3">Completed projects</div>
          </div>
          <div>
            <span class="font-black">05+</span>
            <div class="text-base w-1/2 text-gray-400 mx-auto pt-3">Companies/ Governments worked</div>
          </div>
        </div>
        <div class="mt-12 pb-12">
          <button @click="download" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 focus:outline-none text-lg rounded-full flex mx-auto sm:ml-0">
            Download CV
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    download() {
      // window.location.href = '/pdf/rockgonz.pdf'
      window.open('/rockgonz/pdf/rockgonz.pdf', '_blank')
    }
  }
}
</script>
