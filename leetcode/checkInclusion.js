var checkInclusion = (s1, s2) => {
    const isInvalid = s2.length < s1.length;
    if (isInvalid) return false;

    let [left, right] = [0, 0];
    const [s1FrequencyMap, s2FrequencyMap] = getFrequencyMaps(s1);

    while (right < s2.length) {
        addRightFrequency(s2, right, s2FrequencyMap);

        const window = right - left + 1;
        const isPermutation =
            window === s1.length && isSame(s1FrequencyMap, s2FrequencyMap);
        if (isPermutation) return true;

        const canSlide = s1.length <= window;
        if (canSlide) {
            subtractLeftFrequency(s2, left, s2FrequencyMap);
            left++;
        }

        right++;
    }

    return false;
};
// neetcode
