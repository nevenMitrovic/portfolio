<template>
  <div class="bg-gray-100 min-h-screen">
    <!-- Profile Section -->
    <section class="bg-blue-900 py-10 text-center">
      <div class="bg-white w-3/4 md:w-1/2 mx-auto p-6 rounded-lg shadow-lg">
        <NuxtImg
          src="/slikaCV.jpg"
          alt="Profile"
          width="100px"
          height="100ox"
          class="rounded-full mx-auto mb-4"
        />
        <h2 class="text-2xl font-bold">Neven Mitrovic</h2>
        <p class="text-gray-500">Frontend Developer</p>
        <div class="flex justify-center space-x-4 mt-4">
          <NuxtLink href="#" class="text-blue-500 hover:text-blue-700"
            ><i class="fab fa-facebook"></i
          ></NuxtLink>
          <NuxtLink href="#" class="text-blue-500 hover:text-blue-700"
            ><i class="fab fa-twitter"></i
          ></NuxtLink>
          <NuxtLink href="#" class="text-blue-500 hover:text-blue-700"
            ><i class="fab fa-instagram"></i
          ></NuxtLink>
        </div>
      </div>
    </section>

    <!-- Courses Section -->
    <section class="container mx-auto px-6 py-10">
      <h2 class="text-2xl font-bold mb-6 text-center">Lena Young Courses</h2>
      <div class="flex justify-center space-x-4 mb-8">
        <button
          class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          All
        </button>
        <button class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
          Marketing
        </button>
        <button class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
          Design
        </button>
        <button class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
          Development
        </button>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <CourseCard
          image="https://via.placeholder.com/150"
          date="February 3, 2022"
          title="19 ways to optimize your ad marketing budget efficiently"
          category="Marketing"
        />
        <CourseCard
          image="https://via.placeholder.com/150"
          date="February 2, 2022"
          title="How to design a simple, yet unique and memorable brand identity"
          category="Design"
        />
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-blue-900 text-white py-10 mt-10">
      <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-bold mb-4">Quest</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Pages</h3>
          <ul>
            <li><a href="#" class="hover:underline">Home</a></li>
            <li><a href="#" class="hover:underline">Courses</a></li>
            <li><a href="#" class="hover:underline">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold mb-4">Contact</h3>
          <ul>
            <li><a href="#" class="hover:underline">Start Here</a></li>
            <li><a href="#" class="hover:underline">404 Not Found</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>
