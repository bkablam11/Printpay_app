import React, { forwardRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TeacherCard = forwardRef(({ teacher }, ref) => {
  return (
    <View style={styles.card} ref={ref}>
      <Text style={styles.name}>{teacher.name}</Text>
      <Text>Impressions: {teacher.impressions}</Text>
      <Text>Payments: ${teacher.payments}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TeacherCard;
