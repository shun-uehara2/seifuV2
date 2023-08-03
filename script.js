<!DOCTYPE html>
<html>
<head>
  <title>ふご てん</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="script.js"></script>
</head>
<body class="text-center flex-col items-center justify-center min-h-screen bg-gray-200 text-gray-800 p-4">
  <h1 class="mb-4 text-2xl sm:text-4xl font-bold">ふご てん</h1>
  <p id="timer" class="text-3xl font-bold mb-4"></p>
  <div class="w-full max-w-screen-lg sm:w-3/4 lg:w-1/2 xl:w-1/3 2xl:w-1/4 mx-auto">
    <div class="mb-6 space-y-2 bg-blue-200 p-4 rounded shadow-lg">
      <h2 class="text-lg sm:text-xl font-semibold">加算問題</h2>
      <p id="numbers" class="p-4 bg-gray-100 rounded shadow"></p>
      <div class="flex justify-center gap-5 flex-wrap">
        <button onclick="checkAdditionAnswer('1')" class="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shadow">1</button>
        <button onclick="checkAdditionAnswer('2')" class="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shadow">2</button>
        <button onclick="checkAdditionAnswer('3')" class="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shadow">3</button>
        <button onclick="checkAdditionAnswer('4')" class="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shadow">4</button>
        <button onclick="checkAdditionAnswer('5')" class="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shadow">5</button>
        <button onclick="checkAdditionAnswer('6')" class="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shadow">6</button>
        <button onclick="checkAdditionAnswer('7')" class="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shadow">7</button>
        <button onclick="checkAdditionAnswer('8')" class="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shadow">8</button>
        <button onclick="checkAdditionAnswer('9')" class="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shadow">9</button>
        <button onclick="checkAdditionAnswer('10')" class="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full shadow">10</button>
      </div>
      <p id="additionResult" class="p-4 bg-gray-100 rounded shadow">解答結果と答え</p>
      <p id="additionScore" class="p-4 bg-gray-100 rounded shadow">正解: 0 不正解: 0</p>
    </div>

    <div class="mb-6 space-y-2 bg-green-200 p-4 rounded shadow-lg">
      <h2 class="text-lg sm:text-xl font-semibold">減算問題</h2>
      <p id="subtractionNumbers" class="p-4 bg-gray-100 rounded shadow"></p>
      <div class="flex justify-center gap-5 flex-wrap">
        <button onclick="checkSubtractionAnswer('1')" class="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full shadow">1</button>
        <button onclick="checkSubtractionAnswer('2')" class="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full shadow">2</button>
        <button onclick="checkSubtractionAnswer('3')" class="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full shadow">3</button>
        <button onclick="checkSubtractionAnswer('4')" class="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full shadow">4</button>
        <button onclick="checkSubtractionAnswer('5')" class="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full shadow">5</button>
        <button onclick="checkSubtractionAnswer('6')" class="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full shadow">6</button>
        <button onclick="checkSubtractionAnswer('7')" class="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full shadow">7</button>
        <button onclick="checkSubtractionAnswer('8')" class="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full shadow">8</button>
        <button onclick="checkSubtractionAnswer('9')" class="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full shadow">9</button>
        <button onclick="checkSubtractionAnswer('10')" class="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded-full shadow">10</button>
      </div>
      <p id="subtractionResult" class="p-4 bg-gray-100 rounded shadow">解答結果と答え</p>
      <p id="subtractionScore" class="p-4 bg-gray-100 rounded shadow">正解: 0 不正解: 0</p>
    </div>

    <div class="mb-6 space-y-2 bg-purple-200 p-4 rounded shadow-lg">
      <h2 class="text-lg sm:text-xl font-semibold">乗算問題</h2>
      <p id="multiplicationNumbers" class="p-4 bg-gray-100 rounded shadow"></p>
      <div class="flex justify-center gap-5 flex-wrap">
        <button onclick="checkMultiplicationAnswer('1')" class="w-10 h-10 flex items-center justify-center bg-purple-500 text-white rounded-full shadow">1</button>
        <button onclick="checkMultiplicationAnswer('2')" class="w-10 h-10 flex items-center justify-center bg-purple-500 text-white rounded-full shadow">2</button>
        <button onclick="checkMultiplicationAnswer('3')" class="w-10 h-10 flex items-center justify-center bg-purple-500 text-white rounded-full shadow">3</button>
        <button onclick="checkMultiplicationAnswer('4')" class="w-10 h-10 flex items-center justify-center bg-purple-500 text-white rounded-full shadow">4</button>
        <button onclick="checkMultiplicationAnswer('5')" class="w-10 h-10 flex items-center justify-center bg-purple-500 text-white rounded-full shadow">5</button>
        <button onclick="checkMultiplicationAnswer('6')" class="w-10 h-10 flex items-center justify-center bg-purple-500 text-white rounded-full shadow">6</button>
        <button onclick="checkMultiplicationAnswer('7')" class="w-10 h-10 flex items-center justify-center bg-purple-500 text-white rounded-full shadow">7</button>
        <button onclick="checkMultiplicationAnswer('8')" class="w-10 h-10 flex items-center justify-center bg-purple-500 text-white rounded-full shadow">8</button>
        <button onclick="checkMultiplicationAnswer('9')" class="w-10 h-10 flex items-center justify-center bg-purple-500 text-white rounded-full shadow">9</button>
        <button onclick="checkMultiplicationAnswer('10')" class="w-10 h-10 flex items-center justify-center bg-purple-500 text-white rounded-full shadow">10</button>
      </div>
      <p id="multiplicationResult" class="p-4 bg-gray-100 rounded shadow">解答結果と答え</p>
      <p id="multiplicationScore" class="p-4 bg-gray-100 rounded shadow">正解: 0 不正解: 0</p>
    </div>
  </div>
</body>
</html>
