<template>
  <div class="home max-w-none mx-auto lg:max-w-6xl">
    <div class="h-full grid grid-rows-1 sm:grid-flow-col mt-6 sm:mt-24">
      <div class="px-3">
        <div class="grid-rows-5 text-4xl sm:text-7xl font-black text-center sm:text-left">
          <div class="pb-3 sm:pb-8">Hi,</div>
          <div class="pb-3 sm:pb-8">I'am <span class="text-red-500">ROCKY</span></div>
          <div class="pb-3 sm:pb-8">Web Developer</div>
          <div class="pb-3 text-lg sm:pb-8 text-gray-400 font-normal w-3/4 mx-auto sm:ml-0">Medium level experience in web design and development, producing quality work.</div>
          <div class="pb-3 sm:pb-8">
            <button @click="$router.push('/contact')" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 focus:outline-none text-lg rounded-full">
              Contact
            </button>
            <!-- <div class="flex mt-12 sm:mt-24 w-1/4 mx-auto mb-10 sm:ml-0">
              <img class="h-6 w-6 mr-5 cursor-pointer" src="../assets/img/github.png" />
              <img class="h-6 w-6 mr-5 cursor-pointer" src="../assets/img/gmail.png" />
              <img class="h-6 w-6 mr-5 cursor-pointer" src="../assets/img/fb.png" />
            </div> -->
          </div>
        </div>
      </div>
      <div class="p-6 sm:p-0">
        <img class="rounded-full mx-auto" src="../assets/img/rockgons.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>
