import Categories from "../models/Category.js";

const seedData = async () => {
  try {
    const existingCategories = await Categories.find();

    if (existingCategories.length === 0) {
      // Insertar datos solo si no hay categorías existentes
      const initialCategories = [
        {
          type: "Savings",
          color: "#1F3B5C",
        },
        {
          type: "Investment",
          color: "#FCBE44",
        },
        {
          type: "Investment",
          color: "#C43095",
        },
      ];

      await Categories.insertMany(initialCategories);
      console.log("Seed data inserted successfully.");
    } else {
      console.log("Data already exists. No need to seed.");
    }
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

export default seedData;
