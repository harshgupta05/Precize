package com.mysatapp.precize.model;

import javax.persistence.*;

@Entity
public class SATResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String address;
    private String city;
    private String country;
    private String pincode;
    private int satScore;
    private boolean passed;

    // Constructors, getters, setters, and any other methods here

}
