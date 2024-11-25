# Measures of Location

Measure of location is one of the branches of descriptive statistics,
which is used to determine the position of a series of data in a distribution.
Measure of location is divided into 3, namely quartiles, deciles, and percentiles.
Measure of location is commonly used in the case of group distributions.

For example, in a healthcare service there are officers who measure the weight of toddlers to monitor
the development and growth of toddlers. So the location measurement is used for

| Location size         | Value         | Function                                                      |
| --------------------- | ------------- | -----------------------------                                 |
| Percentile            | 50            | Average toddler weight reference                              |
| Percentile            | 5             | Indications of stunting in toddlers                           |
| Percentile            | 85            | Indications of obesity in toddlers                            |
| Quartile              | Atas          | The lower limit of normal for body weight or height           |
| Quartile              | Bawah         | Normal upper limit reference                                  |

## Percentile

Percentile is the division of N data in order into 100 parts where the data is divided equally, limited by 99 percentile values. Percentile is divided into two according to the type of data, namely Single Data and Grouped Data.

Single data is generally a series of numbers contained in a row or *array*.
The formula for calculating the percentile of single data is as follows
$$ Pi = \frac{i(n+1)}{100} $$

| Symbol        | Explanation    |
| ------------- | ------------- |
| $P_i$         | Persentil ke-i|
| i             | Nilai Persentil (1 hingga 99) |
| n             | Banyaknya data pada baris atau *array*|

The following is an example case of percentiles of single data and grouped data.

### Data Tunggal
For example, there is a row of numbers like below and we want to find the 50th percentile.

:::tabs key:lang
== JavaScript
```javascript
// Single Data Set
const dataSet = [25, 27, 29, 18, 20, 21, 23, 10, 12, 14, 16];

const percentValue = 100;
const percentileValue = 50; // Percentile to calculate (1-99)
const startIndex = 1;
let percentileResult = 0;

// Sort data in ascending order
const sortedData = dataSet.sort((a, b) => a - b);
const dataCount = dataSet.length;

// Calculate percentile position
const position = (dataCount + startIndex) * (percentileValue / percentValue);

// If position is an integer, take the value at that position
if (Number.isInteger(position)) {
    percentileResult = sortedData[position - startIndex]; // 20
} else {
    // If position is not an integer, perform interpolation
    const lowerIndex = Math.floor(position) - startIndex;
    const upperIndex = Math.ceil(position) - startIndex;

    // Values at lower and upper indices
    const lowerValue = sortedData[lowerIndex];
    const upperValue = sortedData[upperIndex];

    // Interpolation to calculate the percentile value
    percentileResult = lowerValue + (upperValue - lowerValue) * (position - Math.floor(position)); // 20
}
```

==Python
```python
# Single Data Set
data_set = [25, 27, 29, 18, 20, 21, 23, 10, 12, 14, 16]

percent_value = 100
percentile_value = 50  # Percentile to calculate (1-99)
start_index = 1
percentile_result = 0

# Sort data in ascending order
sorted_data = sorted(data_set)
data_count = len(data_set)

# Calculate percentile position
position = (data_count + start_index) * (percentile_value / percent_value)

# If position is an integer, take the value at that position
if position.is_integer():
    percentile_result = sorted_data[int(position) - start_index]  # 20
else:
    # If position is not an integer, perform interpolation
    lower_index = int(position) - start_index
    upper_index = int(position + 1) - start_index

    # Values at lower and upper indices
    lower_value = sorted_data[lower_index]
    upper_value = sorted_data[upper_index]

    # Interpolation to calculate the percentile value
    percentile_result = lower_value + (upper_value - lower_value) * (position - int(position))  # 20
    print(percentile_result)
```
:::

### Grouped Data

The following is the percentile formula for grouped data

$$ P_p = L + \frac{p/100 - \sum f_b}{f_i} \times c $$

| Symbol        | Explanation                                                            |
| ------------- | --------------------------------------------------------------------- |
| $P_p$         | The i-th percentile value                                                    |
| L             | The lower bound of the interval class that contains $P_p$                          |
| p             | Percentile values ​​(1 to 99)                                            |
| $\sum f_b$    | The cumulative frequency sum before the interval class containing $P_p$   |
| $f_i$         | The frequency of the interval class containing $P_p$                            |
| c             | The length of the loading interval class $P_p$                              |

For example, there is data on the age group of citizens under 1 year to 40 years as below and we want to find the 50th percentile of this data group.
:::tabs key:lang
== JavaScript
```javascript
// Group Data
const groupData = [
    { interval: [0, 10], frequency: 5 },
    { interval: [10, 20], frequency: 10 },
    { interval: [20, 30], frequency: 8 },
    { interval: [30, 40], frequency: 2 }
];

const percentileValue = 50; // 1-99
const initialValue = 0;
const percentValue = 100;
let percentileResult = 0;

// Function to calculate total frequency
function calculateTotalFrequency(data) {
    return data.reduce((total, item) => total + item.frequency, initialValue);
}

// Function to calculate cumulative data
function calculateCumulativeData(data) {
    let cumulativeFrequency = 0;
    return data.map(item => {
        cumulativeFrequency += item.frequency;
        return { ...item, cumulative: cumulativeFrequency };
    });
}

// Function to calculate percentile value
function calculatePercentileValue(groupData, cumulativeData, percentile) {
    const totalFrequency = calculateTotalFrequency(groupData);
    const position = (percentile / percentValue) * totalFrequency;

    const intervalClass = cumulativeData.find(item => item.cumulative >= position);

    if (intervalClass) {
        const [lowerBound, upperBound] = intervalClass.interval;
        const cumulativeLower = cumulativeData[cumulativeData.indexOf(intervalClass) - 1]?.cumulative || 0;
        const frequencyInClass = intervalClass.frequency;

        return lowerBound + ((position - cumulativeLower) / frequencyInClass) * (upperBound - lowerBound);
    }

    return 0; // Or a default value if the intervalClass is not found
}

// Calculate the 50th percentile value
percentileResult = calculatePercentileValue(groupData, calculateCumulativeData(groupData), percentileValue); // 17.5
```
==Python
```python
# Group Data
group_data = [
    {"interval": [0, 10], "frequency": 5},
    {"interval": [10, 20], "frequency": 10},
    {"interval": [20, 30], "frequency": 8},
    {"interval": [30, 40], "frequency": 2}
]

percentile_value = 50  # 1-99
initial_value = 0
percent_value = 100
percentile_result = 0

# Function to calculate total frequency
def calculate_total_frequency(data):
    return sum(item['frequency'] for item in data)

# Function to calculate cumulative data
def calculate_cumulative_data(data):
    cumulative_frequency = 0
    result = []
    for item in data:
        cumulative_frequency += item['frequency']
        result.append({**item, 'cumulative': cumulative_frequency})
    return result

# Function to calculate percentile value
def calculate_percentile_value(group_data, cumulative_data, percentile):
    total_frequency = calculate_total_frequency(group_data)
    position = (percentile / percent_value) * total_frequency

    interval_class = next((item for item in cumulative_data if item['cumulative'] >= position), None)

    if interval_class:
        lower_bound, upper_bound = interval_class['interval']
        cumulative_lower = cumulative_data[cumulative_data.index(interval_class) - 1]['cumulative'] if cumulative_data.index(interval_class) > 0 else 0
        frequency_in_class = interval_class['frequency']

        return lower_bound + ((position - cumulative_lower) / frequency_in_class) * (upper_bound - lower_bound)

    return 0  # Or a default value if the interval_class is not found

# Calculate the 50th percentile value
percentile_result = calculate_percentile_value(group_data, calculate_cumulative_data(group_data), percentile_value)  # 17.5
print(percentile_result)
```

:::

## Decile
Decile is a division of N data in order into 10 parts where the data is divided equally, so that there are 9 decile values. Decile is divided into two according to the type of data, namely Single Data and Grouped Data.

Single data is generally a series of numbers contained in a row or array . The formula for calculating single data deciles is as follows
$$ Di = \frac{i(n+1)}{10} $$

| Symbol        | Explanation                            |
| ------------- | ------------------------------------- |
| $D_i$         | The i-th decile                            |
| i             | Decile Values ​​(1 to 9)            |
| n             | The amount of data in a row or *array*|

Here is an example *case* of single data decile and grouped data (using previous data)

### Single Data
For example, there is a row of numbers like below and we want to find the 5th decile.

:::tabs key:lang
== JavaScript
```javascript
// Single Data
const singleData = [25, 27, 29, 18, 20, 21, 23, 10, 12, 14, 16];

const percentValue = 10;
const decileValue = 5; // 1-9
let totalDecile = 0;

// Sorting data in ascending order
const sortedData = [...singleData].sort((a, b) => a - b);
const dataSize = singleData.length;

// Calculating the position of the decile value
const position = (decileValue * (dataSize + 1)) / percentValue;

if (Number.isInteger(position)) {
    totalDecile = sortedData[position - 1]; // 20
} else {
    const lowerIndex = Math.floor(position) - 1;
    const upperIndex = Math.ceil(position) - 1;

    const lowerValue = sortedData[lowerIndex];
    const upperValue = sortedData[upperIndex];

    // Interpolation to calculate the decile value
    totalDecile = lowerValue + (upperValue - lowerValue) * (position - Math.floor(position)); // 20
}
```
==Python
```python
# Single Data
single_data = [25, 27, 29, 18, 20, 21, 23, 10, 12, 14, 16]

percent_value = 10
decile_value = 5  # 1-9
total_decile = 0

# Sorting data in ascending order
sorted_data = sorted(single_data)
data_size = len(single_data)

# Calculating the position of the decile value
position = (decile_value * (data_size + 1)) / percent_value

if position.is_integer():
    total_decile = sorted_data[int(position) - 1]  # 20
else:
    lower_index = int(position) - 1
    upper_index = lower_index + 1

    lower_value = sorted_data[lower_index]
    upper_value = sorted_data[upper_index]

    # Interpolation to calculate the decile value
    total_decile = lower_value + (upper_value - lower_value) * (position - int(position))  # 20

print(total_decile)
```
:::

### Grouped Data

The following is the decile formula for grouped data
$$ D_i = L + \frac{i/10 - \sum f_b}{f_i} \times c $$

| Symbol        | Explanation                                                             |
| ------------- | ---------------------------------------------------------------------   |
| $D_i$         | The value of the i-th decile                                            |
| L             | The lower bound of the interval class that contain $D_i$                |
| i             | Decile values ​​(1 to 9)                                                  |
| $\sum f_b$    | The cumulative frequency sum before the interval class containing $D_i$ |
| $f_i$         | The frequency of the interval class containing $D_i$                    |
| c             | The length of the loading interval class $D_i$                          |

For example, there is data on the age group of citizens under 1 year to 40 years as below and we want to find the 9th decile of this data group
:::tabs key:lang
== JavaScript
```javascript
// Group Data
const groupData = [
    { interval: [0, 10], frequency: 5 },
    { interval: [10, 20], frequency: 10 },
    { interval: [20, 30], frequency: 8 },
    { interval: [30, 40], frequency: 2 }
];

const decileValue = 9; // 1-9 for deciles 1 through 9
const initialValue = 0;
const percentValue = 10;
let resultDecile = 0;

// Function to calculate total frequency
function calculateTotalFrequency(data) {
    return data.reduce((total, item) => total + item.frequency, initialValue);
}

// Function to calculate cumulative data
function calculateCumulativeData(data) {
    let cumulativeFrequency = 0;
    return data.map(item => {
        cumulativeFrequency += item.frequency;
        return { ...item, cumulative: cumulativeFrequency };
    });
}

// Function to calculate decile value
function calculateDecileValue(groupData, cumulativeData, decile) {
    const totalFrequency = calculateTotalFrequency(groupData);
    const position = (decile / percentValue) * totalFrequency;

    const intervalClass = cumulativeData.find(item => item.cumulative >= position);

    if (intervalClass) {
        const [lowerBound, upperBound] = intervalClass.interval;
        const cumulativeLower = cumulativeData[cumulativeData.indexOf(intervalClass) - 1]?.cumulative || 0;
        const frequencyInClass = intervalClass.frequency;

        return lowerBound + ((position - cumulativeLower) / frequencyInClass) * (upperBound - lowerBound);
    }

    return 0; // Or a default value if no intervalClass is found
}

// Calculating the 9th decile value
decileResult = calculateDecileValue(groupData, calculateCumulativeData(groupData), decileValue); // 29.375
```

==Python
```python
# Group Data
group_data = [
    {"interval": [0, 10], "frequency": 5},
    {"interval": [10, 20], "frequency": 10},
    {"interval": [20, 30], "frequency": 8},
    {"interval": [30, 40], "frequency": 2}
]

decile_value = 9  # 1-9 for deciles 1 through 9
initial_value = 0
percent_value = 10
result_decile = 0

# Function to calculate total frequency
def calculate_total_frequency(data):
    return sum(item["frequency"] for item in data)

# Function to calculate cumulative data
def calculate_cumulative_data(data):
    cumulative_frequency = 0
    result = []
    for item in data:
        cumulative_frequency += item["frequency"]
        result.append({**item, "cumulative": cumulative_frequency})
    return result

# Function to calculate decile value
def calculate_decile_value(group_data, cumulative_data, decile):
    total_frequency = calculate_total_frequency(group_data)
    position = (decile / percent_value) * total_frequency

    interval_class = next((item for item in cumulative_data if item["cumulative"] >= position), None)

    if interval_class:
        lower_bound, upper_bound = interval_class["interval"]
        cumulative_lower = cumulative_data[cumulative_data.index(interval_class) - 1]["cumulative"] if cumulative_data.index(interval_class) > 0 else 0
        frequency_in_class = interval_class["frequency"]

        return lower_bound + ((position - cumulative_lower) / frequency_in_class) * (upper_bound - lower_bound)

    return 0  # Or a default value if no interval_class is found

# Calculating the 9th decile value
decile_result = calculate_decile_value(group_data, calculate_cumulative_data(group_data), decile_value)  # 29.375
print(decile_result)
```
:::

## Quartile

Quartiles are the division of N data in order into 4 parts where the data is divided equally, so that there are 3 quartile values.
Quartiles are divided into two according to the type of data, namely Single Data and Grouped Data.

Single data is generally a series of numbers contained in a row or array. The formula for calculating the quartile of single data is as follows:
$$ Qi = \frac{i(n+1)}{4} $$

| Symbol        | Explanation                           |
| ------------- | ------------------------------------- |
| Qi            | i-th quartile                         |
| i             | Quartile Values ​​(1 to 9)              |
| n             | The amount of data in a row or *array*|

### Single Data
For example, there is a row of numbers like below and we want to find the 2nd quartile

:::tabs key:lang
== JavaScript
```javascript
// Single Data
const singleData = [25, 27, 29, 18, 20, 21, 23, 10, 12, 14, 16];

const percentValue = 4;
const quartileValue = 2; // 1-3
let resultQuartile = 0;

// Sorting the data in ascending order
const sortedData = [...singleData].sort((a, b) => a - b);
const dataCount = singleData.length;

// Calculating the position of the quartile value
const position = (quartileValue * (dataCount + 1)) / percentValue;

if (Number.isInteger(position)) {
    resultQuartile = sortedData[position - 1]; // 20
} else {
    const lowerIndex = Math.floor(position) - 1;
    const upperIndex = Math.ceil(position) - 1;

    const lowerValue = sortedData[lowerIndex];
    const upperValue = sortedData[upperIndex];

    // Interpolation to calculate the quartile value
    resultQuartile = lowerValue + (upperValue - lowerValue) * (position - Math.floor(position)); // 20
}
```
== Python
``` python
# Single Data
singleData = [25, 27, 29, 18, 20, 21, 23, 10, 12, 14, 16]

percentValue = 4
quartileValue = 2  # 1-3
resultQuartile = 0

# Sorting the data in ascending order
sortedData = sorted(singleData)
dataCount = len(singleData)

# Calculating the position of the quartile value
position = (quartileValue * (dataCount + 1)) / percentValue

if position.is_integer():
    resultQuartile = sortedData[int(position) - 1]  # 20
else:
    lowerIndex = int(position) - 1
    upperIndex = lowerIndex + 1

    lowerValue = sortedData[lowerIndex]
    upperValue = sortedData[upperIndex]

    # Interpolation to calculate the quartile value
    resultQuartile = lowerValue + (upperValue - lowerValue) * (position - int(position))  # 20

print(resultQuartile)
```
:::

### Grouped Data

The following is the quartile formula for grouped data

$$ Q_i = L + \frac{i/4 - \sum f_b}{f_i} \times c $$

| Simbol        | Pengertian                                                              |
| ------------- | ---------------------------------------------------------------------   |
| $Q_i$         | The value of the i-th decile                                            |
| L             | The lower bound of the interval class that contains $Q_i$               |
| i             | Decile values ​​(1 to 9)                                                  |
| $\sum f_b$    | The cumulative frequency sum before the interval class containing $Q_i$ |
| $f_i$         | The frequency of the interval class containing $Q_i$                    |
| c             | The length of the loading interval class $Q_i$                          |

For example, there is data on the age group of citizens under 1 year to 40 years as below and we want to find the 2nd quartile of this data group
:::tabs key:lang
== JavaScript
```javascript
// Group Data
const groupData = [
    { interval: [0, 10], frequency: 5 },
    { interval: [10, 20], frequency: 10 },
    { interval: [20, 30], frequency: 8 },
    { interval: [30, 40], frequency: 2 }
];

const percentValue = 4;
const quartileValue = 2; // 1-3
const initialValue = 0;
let resultQuartile = 0;

// Function to calculate total frequency
function calculateTotalFrequency(data) {
    return data.reduce((sum, item) => sum + item.frequency, initialValue);
}

// Function to calculate cumulative data
function calculateCumulativeData(data) {
    let cumulativeFrequency = 0;
    return data.map(item => {
        cumulativeFrequency += item.frequency;
        return { ...item, cumulative: cumulativeFrequency };
    });
}

// Function to calculate quartile value
function calculateQuartileValue(groupData, cumulativeData, quartile) {
    const totalFrequency = calculateTotalFrequency(groupData);
    const position = (quartile / percentValue) * totalFrequency;

    const intervalClass = cumulativeData.find(item => item.cumulative >= position);

    if (intervalClass) {
        const [lowerLimit, upperLimit] = intervalClass.interval;
        const cumulativeLower = cumulativeData[cumulativeData.indexOf(intervalClass) - 1]?.cumulative || 0;
        const frequencyInClass = intervalClass.frequency;

        return lowerLimit + ((position - cumulativeLower) / frequencyInClass) * (upperLimit - lowerLimit);
    }

    return 0; // Or a default value if the interval class is not found
}

// Calculate the 2nd quartile value
quartileResult = calculateQuartileValue(groupData, calculateCumulativeData(groupData), quartileValue); // 17.5
```
== Kotlin
```kotlin
// Group Data
data class GroupData(val interval: Pair<Int, Int>, val frequency: Int)

val groupData = listOf(
    GroupData(0 to 10, 5),
    GroupData(10 to 20, 10),
    GroupData(20 to 30, 8),
    GroupData(30 to 40, 2)
)

val percentValue = 4
val quartileValue = 2 // 1-3
val initialValue = 0
var resultQuartile = 0.0

// Function to calculate total frequency
fun calculateTotalFrequency(data: List<GroupData>): Int {
    return data.sumOf { it.frequency }
}

// Function to calculate cumulative data
fun calculateCumulativeData(data: List<GroupData>): List<GroupData> {
    var cumulativeFrequency = 0
    return data.map {
        cumulativeFrequency += it.frequency
        it.copy(frequency = cumulativeFrequency)
    }
}

// Function to calculate quartile value
fun calculateQuartileValue(groupData: List<GroupData>, cumulativeData: List<GroupData>, quartile: Int): Double {
    val totalFrequency = calculateTotalFrequency(groupData)
    val position = (quartile.toDouble() / percentValue) * totalFrequency

    val intervalClass = cumulativeData.find { it.frequency >= position }

    intervalClass?.let {
        val (lowerLimit, upperLimit) = it.interval
        val cumulativeLower = cumulativeData.getOrNull(cumulativeData.indexOf(it) - 1)?.frequency ?: 0
        val frequencyInClass = it.frequency - cumulativeLower

        return lowerLimit + ((position - cumulativeLower) / frequencyInClass) * (upperLimit - lowerLimit)
    }

    return 0.0 // Or a default value if the interval class is not found
}

// Calculate the 2nd quartile value
resultQuartile = calculateQuartileValue(groupData, calculateCumulativeData(groupData), quartileValue)
println(resultQuartile) // Output: 29.375
```
== C++
```cpp
#include <iostream>
#include <vector>
#include <numeric> // for std::accumulate

// Structure to represent group data
struct GroupData {
    std::pair<int, int> interval; // Interval for the group
    int frequency; // Frequency count for the group
};

int decileValue = 9; // 1-9 for the 1st to 9th decile
int initialValue = 0; // Initial value for calculations
int percentValue = 10; // Percentage value
double resultDecile = 0; // Variable to store the result for the decile

// Function to calculate total frequency
int calculateTotalFrequency(const std::vector<GroupData>& data) {
    return std::accumulate(data.begin(), data.end(), initialValue,
                           [](int sum, const GroupData& item) {
                               return sum + item.frequency; // Summing up the frequencies
                           });
}

// Function to calculate cumulative data
std::vector<GroupData> calculateCumulativeData(const std::vector<GroupData>& data) {
    int cumulativeFrequency = 0; // Variable to hold cumulative frequency
    std::vector<GroupData> cumulativeData; // Vector to store cumulative data

    for (const auto& item : data) {
        cumulativeFrequency += item.frequency; // Update cumulative frequency
        cumulativeData.push_back({ item.interval, cumulativeFrequency }); // Add to cumulative data
    }

    return cumulativeData; // Return the cumulative data
}

// Function to calculate decile value
double calculateDecileValue(const std::vector<GroupData>& groupData, const std::vector<GroupData>& cumulativeData, int decile) {
    int totalFrequency = calculateTotalFrequency(groupData); // Get total frequency
    double position = (static_cast<double>(decile) / percentValue) * totalFrequency; // Calculate position for the decile

    // Find the interval class where the cumulative frequency is greater than or equal to position
    auto intervalClass = std::find_if(cumulativeData.begin(), cumulativeData.end(),
                                      [position](const GroupData& item) {
                                          return item.frequency >= position; // Condition for finding the interval
                                      });

    if (intervalClass != cumulativeData.end()) { // If the interval class is found
        int lowerLimit = intervalClass->interval.first; // Lower limit of the interval
        int upperLimit = intervalClass->interval.second; // Upper limit of the interval
        int index = std::distance(cumulativeData.begin(), intervalClass); // Index of the found interval
        int cumulativeLower = (index > 0) ? cumulativeData[index - 1].frequency : 0; // Cumulative frequency below the found class
        int frequencyInClass = intervalClass->frequency - cumulativeLower; // Frequency within the class

        // Interpolating to find the decile value
        return lowerLimit + ((position - cumulativeLower) / frequencyInClass) * (upperLimit - lowerLimit);
    }

    return 0.0; // Return 0 if the interval class is not found (or a default value)
}

int main() {
    // Group data with intervals and frequencies
    std::vector<GroupData> groupData = {
        {{0, 10}, 5},
        {{10, 20}, 10},
        {{20, 30}, 8},
        {{30, 40}, 2}
    };

    // Calculate the value of the 9th decile
    resultDecile = calculateDecileValue(groupData, calculateCumulativeData(groupData), decileValue);
    std::cout << resultDecile << std::endl; // Output: 29.375

    return 0;
}

```
==Python
```python
# Group data
dataGroups = [
    {"interval": [0, 10], "frequency": 5},
    {"interval": [10, 20], "frequency": 10},
    {"interval": [20, 30], "frequency": 8},
    {"interval": [30, 40], "frequency": 2}
]

percentageCount = 4
quartileValue = 2  # 1-3 for quartiles
initialValue = 0
resultQuartile = 0

# Function to calculate total frequency
def calculateTotalFrequency(data):
    return sum(item["frequency"] for item in data)

# Function to calculate cumulative data
def calculateCumulativeData(data):
    cumulativeFrequency = 0
    results = []
    for item in data:
        cumulativeFrequency += item["frequency"]
        results.append({**item, "cumulative": cumulativeFrequency})  # Add cumulative frequency to results
    return results

# Function to calculate quartile value
def calculateQuartileValue(dataGroups, cumulativeData, quartile):
    totalFrequency = calculateTotalFrequency(dataGroups)  # Calculate total frequency
    position = (quartile / percentageCount) * totalFrequency  # Calculate position for the quartile

    # Find the class interval where cumulative frequency is greater than or equal to position
    classInterval = next((item for item in cumulativeData if item["cumulative"] >= position), None)

    if classInterval:  # If the class interval is found
        lowerBound, upperBound = classInterval["interval"]  # Get bounds of the interval
        cumulativeLower = cumulativeData[cumulativeData.index(classInterval) - 1]["cumulative"] if cumulativeData.index(classInterval) > 0 else 0
        frequencyInClass = classInterval["frequency"]  # Frequency in the class

        # Interpolate to find the quartile value
        return lowerBound + ((position - cumulativeLower) / frequencyInClass) * (upperBound - lowerBound)

    return 0  # Return 0 or a default value if the class interval is not found

# Calculate the value of the 2nd quartile
resultQuartile = calculateQuartileValue(dataGroups, calculateCumulativeData(dataGroups), quartileValue)  # 17.5
print(resultQuartile)
```
:::
