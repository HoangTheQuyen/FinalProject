<template>
  <div>
    <h4 class="bg-primary text-white text-center p-2">Transfer</h4>
    <form>
      <div class="form-group">
        <label for="sender">Number Sender:</label>
        <input type="text" readonly class="form-control" id="sender">
      </div>

      <div class="form-group">
        <label for="reciver">Number Reciver:</label>
        <input type="text" class="form-control" id="reciver">
      </div>

      <div class="form-group">
        <label for="money">Transfer Amount:</label>
        <input type="text" class="form-control" id="money">
      </div>

      <div>
        <label for="sel1">Select payment form (select one):</label>
        <select class="form-control" id="selectpayment" name="selectpayment">
          <option value="1">Người nhận trả</option>
          <option value="2">Người gửi trả</option>
        </select>
      </div>

      <div class="form-group">
        <label for="description">Description:</label>
        <textarea class="form-control" rows="5" id="description"></textarea>
      </div>

      <button class="btn btn-primary">Transfer Now</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>
