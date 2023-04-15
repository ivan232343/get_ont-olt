setTimeout(
    () => {
        let nums = document.querySelector("dd#signal_wrapper").textContent.split("/");
        let diff;
        nums.onu = parseFloat(nums[0])
        nums.olt = parseFloat(nums[1])
        console.log(nums)
        if (nums.onu >= -25.5 && nums.olt >= -30.0) {
            if (nums.onu > nums.olt) {
                diff = nums.onu - nums.olt
            } else if (nums.onu < nums.olt) {
                diff = nums.olt - nums.onu
            }
            console.log(diff)
        }
        else {
            console.log("require visita tecnica")
        }
    }, 250
)