package com.example.Backend.Controller;


import com.example.Backend.Dto.PredictRequestDto;
import com.example.Backend.Service.PredictService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;




@CrossOrigin(origins="http://localhost:5173")
@RestController
public class PredictRequestController {
    private final PredictService predictService;
    public PredictRequestController(PredictService predictService) {
        this.predictService=predictService;
    }

    @PostMapping("/predict")
    public String Predict(@RequestBody PredictRequestDto predictRequestDto){
        return predictService.predict(predictRequestDto);
    }

}