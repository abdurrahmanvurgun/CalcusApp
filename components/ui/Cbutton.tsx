import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonType = 'number' | 'operator' | 'action';

interface CalculatorButtonProps {
  label: string;
  value: string | number;
  onPress: (value: string | number) => void;
  type?: ButtonType;
}

const Cbutton: React.FC<CalculatorButtonProps> = ({
  label,
  value,
  onPress,
  type = 'number',
}) => {
  let backgroundColor = '#007BFF';
  let textColor = '#FFFFFF';

  if (type === 'operator') backgroundColor = '#28a745';
  if (type === 'action') backgroundColor = '#dc3545';

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={() => onPress(value)}
    >
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Cbutton;

const styles = StyleSheet.create({
  button: {
    flexGrow: 1,
    flexShrink: 1,
    padding: 45,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    minWidth: 90,
  },
  text: {
    fontSize: 33,
    fontWeight: 'bold',
  },
});
