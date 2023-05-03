const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const target = 200;

function solve(expression, targetValue, nums, currentNumIndex, currentResult) {
    if (currentNumIndex === nums.length) {
        if (currentResult === targetValue) {
            console.log(expression + "= " + targetValue);
        }
        return expression;
    }

    const currentNumStr = nums[currentNumIndex].toString();
    const nextNumIndex = currentNumIndex + 1;

    solve(
        expression + currentNumStr,
        targetValue,
        nums,
        nextNumIndex,
        currentResult + nums[currentNumIndex]
    );

    if (currentNumIndex > 0) {
        solve(
            expression + "+" + currentNumStr,
            targetValue,
            nums,
            nextNumIndex,
            currentResult + nums[currentNumIndex]
        );
        solve(
            expression + "-" + currentNumStr,
            targetValue,
            nums,
            nextNumIndex,
            currentResult - nums[currentNumIndex]
        );
    }
}

solve("", target, nums, 0, 0);
