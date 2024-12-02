function constructionCrew(worker) {
    if (worker.dizziness) {
        // Calculate the required hydration
        const requiredWater = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += requiredWater;
        worker.dizziness = false;
    }
    return worker;
}

// Example Usage:
console.log(constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
})); 
// Output: { weight: 80, experience: 1, levelOfHydrated: 8, dizziness: false }

console.log(constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
})); 
// Output: { weight: 120, experience: 20, levelOfHydrated: 440, dizziness: false }

console.log(constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
})); 
// Output: { weight: 95, experience: 3, levelOfHydrated: 0, dizziness: false }
