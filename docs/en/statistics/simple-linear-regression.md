---
contributors:
  - name: "Fadjar"
    username: "fadjarrafi"
---

# Simple Linear Regression

Have you ever wondered how large companies make their advertising investment decisions? Or how real estate determines house selling prices? The answer lies in a statistical technique called simple linear regression.
Simple linear regression is a statistical method that allows us to understand and predict the relationship between two variables. Think of it as finding a "connecting thread" that links advertising costs ($x$) with sales levels ($y$).

Mathematically, this relationship can be expressed with the formula:

$$
y = \beta_0 + \beta_1 x + \varepsilon
$$

Where:

| Symbol      | Meaning    |
| ------------- | ------------- |
| $x$             | Independent Variable |
| $y$             | Dependent Variable |
| β₀            | *Intercept* (value of $y$ when $x$ = 0)|
| β₁            | *Slope*  (how much $y$ changes for each unit change in $x$)|
| ε             | *Error term*|

## Functions of Linear Regression

Linear regression has two crucial roles in data analysis:

1. Relationship Verification

    - Statistically prove whether there is a real relationship between two variables
    - Measure how strong that relationship is
    - Example: Is it true that education level affects income level?


2. Predictive Power

    - Enables us to predict future values
    - Make business decisions based on historical data
    - Example: If we increase the advertising budget by $x$, what sales increase ($y$) can we expect?

## Calculating Linear Regression

Let's take a case where we want to know the correlation between advertising costs ($x$) and sales ($y$). For example, we have data as follows:

| Advertising Cost  | Units          |
| ------------ | ------------- |
| 100          | 500           |
| 200          | 700           |
| 300          | 900           |
| 400          | 1100          |
| 500          | 1300          |

Before we calculate simple linear regression with this data, we need to:

1. Calculate the Slope $\beta_1$
2. Calculate the Intercept $\beta_0$

### Calculating the Slope ($\beta_1$)

The slope represents the change in variable $y$ for each change in variable $x$. We can calculate the slope using the following formula:

$$
\beta_1 = \frac{\sum(x_i - \bar{x})(y_i - \bar{y})}{\sum(x_i - \bar{x})^2}
$$

Where:

| Symbol            | Meaning    |
| ----------------- | ------------- |
| $x_i$             | Individual values of the Independent variable |
| $y_i$             | Individual values of the Dependent variable |
| $\bar{x}$         | Mean of all Independent variable values |
| $\bar{y}$         | Mean of all Dependent variable values |

Let's first calculate the mean of each advertising cost ($x$) and sales units ($y$):

$$ \bar{x} = (100 + 200 + 300 + 400 + 500) / 5 = 300 $$
$$ \bar{y} = (500 + 700 + 900 + 1100 + 1300) / 5 = 900 $$

After we find the means of advertising costs and sales units, next we calculate the Slope:

$$ (100 - 300)(500 - 900) = (-200)(-400) = 80,000 $$
$$ (200 - 300)(700 - 900) = (-100)(-200) = 20,000 $$
$$ (300 - 300)(900 - 900) = (0)(0) = 0 $$
$$ (400 - 300)(1100 - 900) = (100)(200) = 20,000 $$
$$ (500 - 300)(1300 - 900) = (200)(400) = 80,000 $$

$$ Total = 200,000 $$

$$ (100 - 300)² = (-200)² = 40,000 $$
$$ (200 - 300)² = (-100)² = 10,000 $$
$$ (300 - 300)² = (0)² = 0 $$
$$ (400 - 300)² = (100)² = 10,000 $$
$$ (500 - 300)² = (200)² = 40,000 $$

$$ Total = 100,000 $$
$$ \beta_1 = 200,000/100,000 = 2 $$

From the sales data above, we get a Slope value = 2, which means that for every 1 unit increase in cost ($x$), sales ($y$) will increase by 2 units.

### Calculating the Intercept ($\beta_0$)

After we find the Slope value, we calculate the Intercept value with the following formula:

$$
\beta_0 = \bar{y} - \beta_1\bar{x}
$$

Where:

| Symbol            | Meaning    |
| ----------------- | ------------- |
| $\bar{y}$         | Mean of all independent variable values |
| $\bar{x}$         | Mean of all dependent variable values |
| $\beta_1$         | *Slope* |

Let's calculate the Intercept from the Slope we calculated earlier:

$$ \beta_0 = 900 - (2 × 300) $$
$$ \beta_0 = 300 $$

This means when advertising costs are 0, the predicted sales are 300 units. After we know the Slope and Intercept, we can input them into the linear regression equation as follows:

$$ y = 300 + 2x $$

So how do we use this formula to make predictions? For example, in the next advertisement, we want to know how many sales we'll get if we spend 250 on advertising. We input the advertising cost of 250 into the equation we've determined:

$$ y = 300 + 2(250) $$
$$ y = 300 + 500 $$
$$ y = 800 $$

So if we spend 250 on advertising, we can predict sales of 800 units. Here's the equation we've obtained if we draw it in a graph:

<iframe src="https://www.desmos.com/calculator/zgbfvjefuz?embed" width="700" height="500" style="border: 1px solid #ccc" frameborder=0></iframe>

The linear regression calculation we've made can be simulated in the following program:

:::tabs
== JavaScript
```js
// Sales and advertising data
const sales_data = {
    advertising_cost: [100, 200, 300, 400, 500],
    units_sold: [500, 700, 900, 1100, 1300]
};

// Calculate average of array
function calculate_mean(data) {
    return data.reduce((total, value) => total + value, 0) / data.length;
}

// Calculate slope (β₁) from data
function calculate_slope(data) {
    const mean_x = calculate_mean(data.advertising_cost);
    const mean_y = calculate_mean(data.units_sold);
    
    let numerator = 0;
    let denominator = 0;
    
    // Calculate numerator and denominator for slope formula
    for (let i = 0; i < data.advertising_cost.length; i++) {
        const diff_x = data.advertising_cost[i] - mean_x;
        const diff_y = data.units_sold[i] - mean_y;
        
        numerator += diff_x * diff_y;
        denominator += diff_x * diff_x;
    }
    
    return numerator / denominator;
}

// Calculate intercept (β₀) from data
function calculate_intercept(data, slope) {
    const mean_x = calculate_mean(data.advertising_cost);
    const mean_y = calculate_mean(data.units_sold);
    
    return mean_y - (slope * mean_x);
}

// Predict units sold based on advertising cost
function predict_sales(advertising_cost, slope, intercept) {
    return intercept + (slope * advertising_cost);
}

// Calculate regression
const slope = calculate_slope(sales_data);
const intercept = calculate_intercept(sales_data, slope);

// Display results
console.log(`Slope (β₁): ${slope}`); // output: 2
console.log(`Intercept (β₀): ${intercept}`); // output: 300

// Example prediction
const new_cost = 250;
const prediction = predict_sales(new_cost, slope, intercept);
console.log(`${prediction} units`);
```
:::
## Classical Assumptions of Linear Regression

Before starting to apply linear regression, it's important for us to understand its basic assumptions:

1. Linearity

The first and most fundamental assumption is that the relationship between the independent variable ($x$) and dependent variable ($y$) must be linear. Imagine if we plot the data points on a graph, these points should form a pattern that can be approximated by a straight line. We can check this assumption by creating a scatter plot of our data. If the pattern formed is far from linear, for example forming a curve or other pattern, then we need to perform data transformation first. Common transformations include logarithms, square roots, or other transformations that suit the data shape.

2. Independence

The second assumption is that each observation in our data must be independent or not influence each other. This is particularly important when working with data collected over time (time series). For example, if we're analyzing daily sales, today's sales should not be influenced by yesterday's sales. If there is influence between observations (autocorrelation), our analysis results could be biased. We can check this assumption with an ACF (Autocorrelation Function) plot or using statistical tests like Durbin-Watson.

3. Homoscedasticity

This term, which might sound complicated, actually refers to a fairly simple concept: the variance of errors (residuals) must be constant for all values of the independent variable. In the context of our example about advertising and sales, this means the level of prediction error should be relatively the same, both for low and high advertising costs. We can check this assumption by plotting residuals against predicted values. If the plot shows a particular pattern (like a funnel shape), then this assumption is not met and we need to perform data transformation or use more robust analysis methods.

4. Normality

The final assumption is that the residuals or errors must follow a normal distribution. This is important especially when we want to perform hypothesis testing or create confidence intervals. Imagine if we make a histogram of the errors, its shape should resemble a symmetrical bell (normal curve). We can check this assumption in several ways, from simple ones like making residual histograms or Q-Q plots, to formal tests like Shapiro-Wilk or Kolmogorov-Smirnov.


## Testing the Equation with Coefficient of Determination ($R^2$)

Then how do we know the ability of the regression equation to explain how much the independent variables together (simultaneously) affect the dependent variable? This is where we perform the Coefficient of Determination Test. The coefficient of determination is a measure that shows how well the regression model explains the data. We can calculate the coefficient of determination with the formula:

$$ R^2 = 1 - \frac{\sum(y_i - \hat{y_i})^2}{\sum(y_i - \bar{y})^2} $$

Where:

| Symbol            | Meaning    |
| ----------------- | ------------- |
| $y_i$             | Actual Value |
| $\hat{y_i}$       | Predicted Value |
| $\bar{y}$         | Mean of Actual Values |

The coefficient of determination describes the amount of variance (information) in variable $y$ that can be provided by our regression model. The coefficient value ranges from 0 to 1. If the $R^2$ value is multiplied by 100%, this shows the percentage of variance (information) in variable $y$.

To calculate $R^2$, we need to calculate:

1. Predicted Values ($\hat{y_i}$) for Each $x$
2. Mean of Actual $y$ Values ($\bar{y}$)
3. SS_total and SS_residual Values

### Calculating Predicted Values ($\hat{y_i}$) for Each $x$

We calculate each value we have with the linear regression equation we obtained earlier, which is: $y = 300 + 2x$

| Advertising Cost ($x$)  | Units ($y$)      | $\hat{y}$ (Y Predicted) |
| ---------------- | ------------- | ---------------------- |
| 100              | 500           | 300 + 2(100) = 500     | 
| 200              | 700           | 300 + 2(200) = 700     |
| 300              | 900           | 300 + 2(300) = 900     |
| 400              | 1100          | 300 + 2(400) = 1100    |
| 500              | 1300          | 300 + 2(500) = 1300    |

### Calculating Mean of Actual $y$ Values ($\bar{y}$)

$$ \bar{y} = (500 + 700 + 900 + 1100 + 1300) / 5 = 900 $$

$$ (500 - 900)² = (-400)² = 160,000 $$
$$ (700 - 900)² = (-200)² = 40,000 $$
$$ (900 - 900)² = 0 $$
$$ (1100 - 900)² = (200)² = 40,000 $$
$$ (1300 - 900)² = (400)² = 160,000 $$
$$ SStotal = 400,000 $$

### Calculating $R^2$

We can calculate $R^2$ using the formula:

$$ R^2 = 1 - (SSresidual / SStotal) $$

Where:

| Symbol             | Meaning    |
| -----------------  | ------------- |
| $SSresidual$        | sum of squares due to regression |
| $SStotal$           | total sum of squares |

let's calculate total $SStotal$ and $SSresidual$ as follows:
$$ SStotal = \sum(y - \bar{y})^2 $$

$$ (500 - 500)² = 0 $$
$$ (700 - 700)² = 0 $$
$$ (900 - 900)² = 0 $$
$$ (1100 - 1100)² = 0 $$
$$ (1300 - 1300)² = 0 $$

$$ SSresidual = 0 $$

After we get the values of $SStotal$ and $SSresidual$, we input them into the coefficient of determination formula:

$$ R^2 = 1 - (0 / 400,000) $$
$$ R^2 = 1 $$

The result $R^2$ = 1 shows that:

1. The model explains 100% of the variation in the data
2. All data points lie exactly on the regression line
3. The model's predictions are perfect for the existing data

Here's the $R^2$ calculation if we depict it through a graph:

<svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" color>
    <rect width="100%" height="100%" fill="white" />
  <!-- Grid Background -->
  <defs>
    <pattern id="grid" width="60" height="40" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 40" fill="none" stroke="#eee" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="600" height="400" fill="url(#grid)"/>
  
  <!-- Axes -->
  <line x1="50" y1="350" x2="550" y2="350" stroke="black" stroke-width="2"/>
  <line x1="50" y1="50" x2="50" y2="350" stroke="black" stroke-width="2"/>
  
  <!-- Axis Labels -->
  <text x="300" y="390" text-anchor="middle">Biaya Iklan (X)</text>
  <text x="20" y="200" transform="rotate(-90, 20, 200)" text-anchor="middle">Penjualan (Y)</text>
  
  <!-- Regression Line -->
  <line x1="50" y1="290" x2="550" y2="90" stroke="blue" stroke-width="2"/>
  
  <!-- Data Points -->
  <circle cx="110" cy="250" r="4" fill="red"/>
  <circle cx="170" cy="230" r="4" fill="red"/>
  <circle cx="230" cy="210" r="4" fill="red"/>
  <circle cx="290" cy="190" r="4" fill="red"/>
  <circle cx="350" cy="170" r="4" fill="red"/>
  
  <!-- R² Annotation -->
  <text x="450" y="100" text-anchor="middle" fill="blue">R² = 1.0</text>
  <text x="450" y="120" text-anchor="middle" font-size="12">Perfect Fit</text>
</svg>

This shows that even with little variation in the data, $R^2$ can still be very high if the model fits the data pattern. We can simulate the coefficient of determination calculation with the following program:

:::tabs
== JavaScript
```js
// Calculate coefficient of determination (R²)
function calculate_r_squared(data, slope, intercept) {
    const mean_y = calculate_mean(data.units_sold);
    
    let ss_total = 0;  // Sum of squares total
    let ss_residual = 0;  // Sum of squares residual
    
    for (let i = 0; i < data.advertising_cost.length; i++) {
        const y_predicted = intercept + (slope * data.advertising_cost[i]);
        const y_actual = data.units_sold[i];
        
        ss_total += Math.pow(y_actual - mean_y, 2);
        ss_residual += Math.pow(y_actual - y_predicted, 2);
    }
    
    return 1 - (ss_residual / ss_total);
}

// Usage
const r_squared = calculate_r_squared(sales_data, slope, intercept);
console.log(`R² (Coefficient of Determination): ${r_squared.toFixed(4)}`); // Output: 0.9989 which we round to 1
```
:::
