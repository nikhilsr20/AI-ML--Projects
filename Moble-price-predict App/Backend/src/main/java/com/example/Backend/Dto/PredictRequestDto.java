package com.example.Backend.Dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
public class PredictRequestDto {
    private String brand;
    private Long ram;
    private Long storage;
    private Long battery;
    private Long mainCamera;
    private Long selfieCamera;
    private Long screenSize;
    private Long refreshRate;
    private Long fiveG;
    private Long fastCharging;
    private Long processorScore;
}
