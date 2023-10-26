function getSecondLargest(nums) {
  let max = 0,
    second = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] > max) {
      second = max;
      max = nums[i];
    } else {
      if (nums[i] > second && nums[i] !== max) second = nums[i];
    }
  }
  return second;
}
