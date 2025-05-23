
import { useState } from "react";
import { HealthLayout } from "@/components/HealthLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Apple, Plus, Search } from "lucide-react";

const NutritionPage = () => {
  const [searchFood, setSearchFood] = useState("");

  const dailyNutrition = [
    { nutrient: "Calories", current: 1450, goal: 2000, unit: "kcal", color: "bg-red-500" },
    { nutrient: "Protein", current: 68, goal: 100, unit: "g", color: "bg-blue-500" },
    { nutrient: "Carbs", current: 180, goal: 250, unit: "g", color: "bg-yellow-500" },
    { nutrient: "Fat", current: 45, goal: 65, unit: "g", color: "bg-green-500" },
  ];

  const recentMeals = [
    {
      meal: "Breakfast",
      time: "8:30 AM",
      foods: ["Oatmeal with berries", "Greek yogurt", "Coffee"],
      calories: 420
    },
    {
      meal: "Lunch",
      time: "12:45 PM", 
      foods: ["Grilled chicken salad", "Whole wheat bread", "Water"],
      calories: 520
    },
    {
      meal: "Snack",
      time: "3:30 PM",
      foods: ["Apple", "Almonds"],
      calories: 180
    }
  ];

  const popularFoods = [
    { name: "Banana", calories: "105 cal", emoji: "🍌" },
    { name: "Chicken Breast", calories: "165 cal", emoji: "🍗" },
    { name: "Brown Rice", calories: "218 cal", emoji: "🍚" },
    { name: "Broccoli", calories: "25 cal", emoji: "🥦" },
    { name: "Salmon", calories: "206 cal", emoji: "🐟" },
    { name: "Avocado", calories: "234 cal", emoji: "🥑" },
  ];

  return (
    <HealthLayout>
      <div className="space-y-6 p-4 md:p-6">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Nutrition Tracking</h1>
          <p className="text-gray-600">Monitor your daily food intake and nutrition goals</p>
        </div>

        {/* Daily Nutrition Progress */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {dailyNutrition.map((item) => (
            <Card key={item.nutrient}>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-900">{item.nutrient}</h3>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {item.current}<span className="text-sm text-gray-500">/{item.goal} {item.unit}</span>
                    </p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${item.color}`}
                      style={{ width: `${Math.min((item.current / item.goal) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500">
                    {Math.round((item.current / item.goal) * 100)}% of daily goal
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Food */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5 text-green-500" />
              Log Food
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search for foods..."
                  className="pl-9 text-lg"
                  value={searchFood}
                  onChange={(e) => setSearchFood(e.target.value)}
                />
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Popular Foods</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {popularFoods.map((food) => (
                    <Button
                      key={food.name}
                      variant="outline"
                      className="h-20 flex-col gap-1 hover:bg-green-50 hover:border-green-300"
                    >
                      <span className="text-2xl">{food.emoji}</span>
                      <div className="text-center">
                        <p className="text-xs font-medium">{food.name}</p>
                        <p className="text-xs text-gray-500">{food.calories}</p>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Today's Meals */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Apple className="h-5 w-5 text-red-500" />
              Today's Meals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMeals.map((meal, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h4 className="font-semibold text-gray-900">{meal.meal}</h4>
                      <span className="text-sm text-gray-500">{meal.time}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {meal.foods.map((food, foodIndex) => (
                        <span key={foodIndex} className="text-sm text-gray-600">
                          {food}{foodIndex < meal.foods.length - 1 && ","}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="font-semibold text-green-600">{meal.calories} cal</span>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add New Meal
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </HealthLayout>
  );
};

export default NutritionPage;
