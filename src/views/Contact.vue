<template>
  <div class="max-w-none mx-auto lg:max-w-6xl">
    <div class="mt-6 sm:mt-24 text-center text-4xl font-black">Contact</div>
    <div class="mt-3 text-center text-gray-400 text-lg pb-6">Get in touch</div>
    <div class="h-full grid grid-rows-1 sm:grid-flow-col sm:grid-cols-2 mt-12 gap-6">
      <div class="mb-6">
        <div>
          <div class="text-center sm:text-left pl-3">
            <div class="text-2xl font-bold">Call Me</div>
            <div class="font-normal text-blue-700">+639322929560 / +639109766836</div>
          </div>
        </div>
        <div class="mt-12">
          <div class="text-center sm:text-left pl-3">
            <div class="text-2xl font-bold">Email</div>
            <div class="font-normal text-blue-700">gonzrock12@gmail.com / botikmotd@gmail.com</div>
          </div>
        </div>
        <div class="mt-12">
          <div class="text-center sm:text-left pl-3">
            <div class="text-2xl font-bold">Location</div>
            <div class="font-normal text-blue-700">P-1 Bonbon Butuan City, Philippines 8600</div>
          </div>
        </div>
      </div>
      <div class="col-span-1 px-6 sm:col-span-10 sm:px-0">
        <div class="w-full max-w-lg mx-auto">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Name
              </label>
              <input v-model="name" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Your name..">
              <p v-if="!validName" class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                Email
              </label>
              <input v-model="email" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email" placeholder="sample@email.com">
              <p v-if="!validEmail" class="text-red-500 text-xs italic pt-2">{{ errmessage }}</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Message
              </label>
              <textarea v-model="message" rows="5" class="resize-none border rounded-md appearance-none block w-full bg-gray-200 text-gray-700 border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
              <p v-if="!validMessage" class="text-red-500 text-xs italic pt-2">Please fill out this field.</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3 flex">
              <button @click="send" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 focus:outline-none text-lg rounded-full">
                Send
              </button>
              <p v-if="!submitSuccess" class="text-green-500 text-sm italic pt-3 pl-3">Your message was successfully submited. Thank You :)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  data() {
    return {
      name: '',
      validName: true,
      email: '',
      validEmail: true,
      message: '',
      validMessage: true,
      errmessage: 'Please fill out this field.',
      valid: true,
      submitSuccess: true,
      reg: /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },
  methods: {
    send() {
      if(this.name.length < 1 || this.name === '') {
        this.validName = false
        return
      }
      this.validName = true
      if (this.email === null || this.email == '') {
        this.validEmail = false
        return
      }else if(!this.reg.test(this.email)) {
        this.errmessage = "Please Enter Correct Email"
        this.validEmail = false
        return
      }
      this.validEmail = true
      if(this.message.length < 1 || this.message === '') {
        this.validMessage = false
        return
      }
      this.validMessage = true
      const params = {
        from_name: this.name,
        to_name: 'Rocky',
        from_email: this.email,
        message: this.message
      }
      console.log(params)
      this.submitSuccess = false
      this.name = ''
      this.email = ''
      this.message = ''
      emailjs.send('service_pk1ku9o', 'template_sdm6kxu', params).then(function(res){
          console.log('success', res.status)
      })
    }
  }
}
</script>