// @flow
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import Button from './Button';

import styles from './style';

import type { Step } from '../types';

type Props = {
  isFirstStep: boolean,
  isLastStep: boolean,
  handleNext: func,
  handlePrev: func,
  handleStop: func,
  currentStep: Step,
  labels: Object,
  labelsBottom: boolean
};

const Tooltip = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep,
  labels,
  labelsBottom
}: Props) => (
  <View style={{flex: 1}}>
    {labelsBottom !== false ? <ScrollView style={styles.tooltipContainer}>
      <Text testID="stepDescription" style={styles.tooltipText} adjustsFontSizeToFit>{currentStep.text}</Text>
    </ScrollView> : null }
    <View style={[styles.bottomBar]}>
      {
        !isLastStep ?
          <TouchableOpacity onPress={handleStop}>
            <Button>{labels.skip || 'Skip'}</Button>
          </TouchableOpacity>
          : null
      }
      {
        !isFirstStep ?
          <TouchableOpacity onPress={handlePrev}>
            <Button>{labels.previous || 'Previous'}</Button>
          </TouchableOpacity>
          : null
      }
      {
        !isLastStep ?
          <TouchableOpacity onPress={handleNext}>
            <Button>{labels.next || 'Next'}</Button>
          </TouchableOpacity> :
          <TouchableOpacity onPress={handleStop}>
            <Button>{labels.finish || 'Finish'}</Button>
          </TouchableOpacity>
      }
    </View>
    {labelsBottom === false ? <ScrollView style={styles.tooltipContainer}>
      <Text testID="stepDescription" adjustsFontSizeToFit style={styles.tooltipText}>{currentStep.text}</Text>
    </ScrollView> : null }
  </View>
);

export default Tooltip;
