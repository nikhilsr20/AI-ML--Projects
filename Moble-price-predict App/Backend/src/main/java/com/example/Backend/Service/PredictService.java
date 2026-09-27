package com.example.Backend.Service;

import com.example.Backend.Dto.PredictRequestDto;
import com.example.Backend.Dto.PredictResponseDto;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;


@Service
public class PredictService {
    private final RestClient restClient;
    public PredictService(RestClient.Builder builder) {
        this.restClient=builder
                .baseUrl("http://localhost:8000")
                .build();
    }

    public PredictResponseDto predict(PredictRequestDto predictRequestDto)
    {
         return restClient
                 .post()
                 .uri("/predict")
                 .body(predictRequestDto)
                 .retrieve()
                 .body(PredictResponseDto.class);
    }
}
