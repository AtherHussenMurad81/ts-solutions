# 2. How do Pick and Omit utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

## Ans:

- Pick and Omit utility types prevent code duplication by allowing us to create smaller, specialized types from a single master interface without rewriting properties. Pick selects only the required fields, while Omit removes unwanted fields from the original type. This ensures that all derived types stay consistent with the base interface. If the master interface changes, all dependent types automatically update, reducing maintenance effort, This follows the DRY principle by reusing existing definitions instead of duplicating code.
