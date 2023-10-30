package com.mysatapp.precize.controller;

import com.mysatapp.precize.model.SATResult;
import com.mysatapp.precize.service.SATResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SATResultController {

    private final SATResultService satResultService;

    @Autowired
    public SATResultController(SATResultService satResultService) {
        this.satResultService = satResultService;
    }

    // Define your API endpoints and handle requests here
}
