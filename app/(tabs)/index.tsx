import Cbutton from '@/components/ui/Cbutton';
import { calculate, formatNumber } from '@/utils/calculator';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [input, setInput] = useState<string>('');

  const handlePress = (value: string | number) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '←') {
      setInput(prev => prev.slice(0, -1));
    } else if (value === '=') {
      const result = calculate(input);
      setInput(formatNumber(result));
    } else {
      if (value === '.') {
        const lastNumber = input.split(/[\+\-\*\/]/).pop() || '';
        if (lastNumber.includes('.')) return;
      }

      setInput(prev => prev + value.toString());
    }
  };

  return (
    <>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{input || '0'}</Text>
      </View>

      <View style={styles.buttonContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => (
          <Cbutton key={num} label={num.toString()} value={num} onPress={handlePress} type="number" />
        ))}
        <Cbutton label="." value="." onPress={handlePress} type="number" />

        <Cbutton label="+" value="+" onPress={handlePress} type="operator" />
        <Cbutton label="-" value="-" onPress={handlePress} type="operator" />
        <Cbutton label="x" value="x" onPress={handlePress} type="operator" />
        <Cbutton label="/" value="/" onPress={handlePress} type="operator" />

        <Cbutton label="C" value="C" onPress={handlePress} type="action" />
        <Cbutton label="←" value="←" onPress={handlePress} type="action" />
        <Cbutton label="=" value="=" onPress={handlePress} type="action" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  displayContainer: {
    flex: 1,
    alignContent: 'flex-end',
    backgroundColor: '#fff',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  displayText: {
    fontSize: 72,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
