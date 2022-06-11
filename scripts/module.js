Hooks.once('ready', async function () {
    if (game.modules.get('animated-spell-effects-cartoon')){
        const cartoonDatabase = {
            "air": {
                "circle": {
                    "circle": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/air/air_blast_CIRCLE_01.webm"
                    },
                    "portal": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/air/air_portal_CIRCLE_01.webm"
                    },
                    "puff": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/air/air_puff_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/air/air_puff_CIRCLE_02.webm",
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/air/air_puff_CIRCLE_03.webm"
                    }
                },
                "cone": {
                    "blast": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/air/air_blast_CONE_01.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/air/air_blast_CONE_02.webm",
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/air/air_blast_CONE_03.webm",
                        "04": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/air/air_blast_CONE_04.webm",
                        "05": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/air/air_blast_CONE_05.webm"
                    }
                },
                "ray": {
                    "bolt": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/air/air_bolt_RAY_01.webm"
                    }
                },
                "square": {
                    "bolt": {
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/air/air_bolt_SQUARE_01.webm",
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/air/air_bolt_SQUARE_02.webm"
                    },
                    "gust": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/air/air_gust_SQUARE_01.webm"
                    },
                    "wall": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/air/air_wall_SQUARE_01.webm"
                    }
                },
                "rectangle": {
                    "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/air/air_infinity_RECTANGLE_01.webm"
                }
            },
            "earth": {
                "square": {
                    "crack": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/earth/earth_crack_SQUARE_01.webm"
                    },
                    "explosion": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/earth/earth_explosion_SQUARE_01.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/earth/earth_explosion_SQUARE_02.webm",
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/earth/earth_explosion_SQUARE_03.webm"
                    },
                    "plant": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/earth/plant_growing_SQUARE_01.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/earth/plant_growing_SQUARE_02.webm"
                    }
                },
                "rectangle": {
                    "slam": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/earth/earth_slam_RECTANGLE_01.webm"
                    }
                },
                "circle": {
                    "spike": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/earth/earth_spike_CIRCLE_01.webm"
                    }
                }
            },
            "electric": {
                "circle": {
                    "ball": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_ball_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_ball_CIRCLE_03.webm",
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_ball_CIRCLE_04.webm",
                        "04": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_ball_CIRCLE_06.webm",
                        "05": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_ball_CIRCLE_07.webm",
                        "06": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_ball_CIRCLE_08.webm"
                    },
                    "blast": {
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electricity_blast_CIRCLE.webm",
                        "04": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electrivity_blast_CIRCLE.webm"
                    },
                    "discharge": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_discharge_CIRCLE_07.webm",
                        "06": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_disharge_CIRCLE_01.webm",
                        "07": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_disharge_CIRCLE_03.webm",
                        "08": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_dishcarge_CIRCLE_09.webm"
                    },
                    "explosion": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_fire_explosion_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_fire_explosion_CIRCLE_02.webm"
                    },
                    "pulse": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electricity_pulse_CIRCLE_01.webm"
                    },
                    "ring": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/ring_CIRCLE_01.webm"
                    },
                    "shockwave": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_shockwave_blue_CIRCLE.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_shockwave_green_CIRCLE.webm",
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_shockwave_purple_CIRCLE.webm",
                        "04": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_shockwave_red_CIRCLE.webm",
                        "05": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_shockwave_yellow_CIRCLE.webm"
                    }
                },
                "misc": {
                    "blast": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_blast_01.webm"
                    },
                    "lightning": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/lightning_blast_01_r2l.webm"
                    }
                },
                "rectangle": {
                    "blast": {
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_blast_RECTANGLE_02.webm"
                    },
                    "bolt": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/lightning_bolt_RECTANGLE_01.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/lightning_bolt_RECTANGLE_02.webm",
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/lightning_bolt_RECTANGLE_03.webm",
                        "04": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/lightning_bolt_RECTANGLE_04.webm",
                        "05": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/lightning_bolt_RECTANGLE_05.webm",
                        "06": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/lightning_bolt_RECTANGLE_06.webm",
                        "07": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/lightning_bolt_RECTANGLE_07.webm"
                    },
                    "chaotic": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/lightning_chaotic_curves_RECTANGLE_01.webm"
                    },
                    "discharge": {
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_discharge_RECTANGLE_02.webm",
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_discharge_RECTANGLE_04.webm",
                        "04": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_discharge_RECTANGLE_05.webm"
                    },
                    "lightning": {
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/lightning_blast_RECTANGLE_01.webm"
                    },
                    "wheel": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_wheel_loop_RECTANGLE.webm"
                    }
                },
                "cone": {
                    "breath": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/lightning_breath_CONE_01.webm"
                    },
                    "triangle": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electrivity_triangle_CONE_01.webm"
                    }
                },
                "square": {
                    "discharge": {
                        "10": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_dishcarge_SQUARE_09.webm",
                        "05": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_discharge_SQUARE_06.webm",
                        "09": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_dishcarge_SQUARE_08.webm"
                    },
                    "wave": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_wave_SQUARE_01.webm"
                    },
                    "wifi": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_wifi_SQUARE_01.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/electric_wifi_SQUARE_02.webm"
                    }
                },
                "ray": {
                    "lightning": {
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/electricity/lightning_blast_RAY_02.webm"
                    }
                }
            },
            "energy": {
                "circle": {
                    "ball": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_ball_CIRCLE.webm"
                    },
                    "flash": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_flash_CIRCLE.webm"
                    },
                    "pulse": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_pulse_blue_CIRCLE.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_pulse_green_CIRCLE.webm",
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_pulse_purple_CIRCLE.webm",
                        "04": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_pulse_red_CIRCLE.webm",
                        "05": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_pulse_yellow_CIRCLE.webm"
                    },
                    "spark": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_spark_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_spark_CIRCLE_02.webm"
                    },
                    "wheel": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_wheel_loop_CIRCLE.webm"
                    }
                },
                "ray": {
                    "beam": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_beam_RAY_02.webm"
                    },
                    "blast": {
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_blast_RAY_01.webm",
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_blast_RAY_03.webm",
                        "04": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_blast_RAY_04.webm",
                        "05": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_blast_RAY_05.webm"
                    }
                },
                "rectangle": {
                    "beam": {
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_beam_RECTANGLE_01_l2r.webm"
                    },
                    "blast": {
                        "06": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_blasts_RECTANGLE_01.webm"
                    }
                },
                "cone": {
                    "blast": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_blast_CONE_05.webm"
                    }
                },
                "square": {
                    "blast": {
                        "07": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_blasts_SQUARE_01.webm"
                    },
                    "explosion": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_explosion_SQUARE_01.webm"
                    },
                    "tentacles": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/energy/energy_tentacles_SQUARE.webm"
                    }
                }
            },
            "fire": {
                "circle": {
                    "ball": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_ball_CIRCLE_02.webm",
                        "04": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_ball_rotating_CIRCLE_01.webm"
                    },
                    "explosion": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_explosion_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_explosion_CIRCLE_02.webm",
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_explosion_CIRCLE_03.webm",
                        "04": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_explosion_CIRCLE_04.webm",
                        "05": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_explosion_CIRCLE_05.webm",
                        "06": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_explosion_CIRCLE_06.webm",
                        "07": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_explosion_CIRCLE_07.webm",
                        "08": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_explosion_CIRCLE_08.webm"
                    },
                    "ring": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_ring_CIRCLE_01.webm"
                    },
                    "spiral": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_spiral_CIRCLE_01.webm"
                    },
                    "wheel": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_wheel_loop_CIRCLE.webm"
                    }
                },
                "rectangle": {
                    "ball": {
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_ball_RECTANGLE_01.webm",
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_ball_RECTANGLE_09.webm",
                        "04": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_ball_RECTANGLE_11.webm"
                    },
                    "wall": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_wall_RECTANGLE_01.webm"
                    }
                },
                "ray": {
                    "blast": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_blast_RAY_01.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_blast_RAY_02.webm",
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_blast_RAY_03.webm"
                    }
                },
                "square": {
                    "blast": {
                        "04": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_blast_SQUARE_01.webm"
                    },
                    "pheonix": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_explosion_pheonix_SQUARE.webm"
                    },
                    "ray": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_ray_SQUARE_01.webm"
                    }
                },
                "misc": {
                    "bolt": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_bolt_30ft_1600x400.webm"
                    }
                },
                "cone": {
                    "breath": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_breath_CONE_01.webm"
                    },
                    "cone": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/fire/fire_cone_CONE_01.webm"
                    }
                }
            },
            "magic": {
                "circle": {
                    "aura": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/aura_CIRCLE_01.webm"
                    },
                    "explosion": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/magic_explosion_symbol_CIRCLE.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/magic_explosion_symbol_CIRCLE_02.webm"
                    }
                },
                "rectangle": {
                    "helix": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/helix_RECTANGLE_01.webm"
                    },
                    "chaotic_curves": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/magic_chaotic_curves_RECTANGLE_01.webm"
                    },
                    "gloop": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/magic_gloop_RECTANGLE_01.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/magic_gloop_RECTANGLE_02.webm"
                    },
                    "swish": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/magic_swish_RECTANGLE_01.webm"
                    }
                },
                "square": {
                    "impact": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/magic_impact_SQUARE_01.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/magic_impact_SQUARE_02.webm",
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/magic_impact_SQUARE_03.webm"
                    },
                    "sphere": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/magic_sphere_1token_SQUARE.webm"
                    },
                    "swish": {
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/magic_swish_SQUARE_02.webm",
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/magic_swish_SQUARE_03.webm",
                        "04": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/magic_swish_SQUARE_04.webm",
                        "05": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/magic_swish_SQUARE_05.webm"
                    },
                    "portal": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/portal_square_blue_SQUARE.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/portal_square_green_SQUARE.webm",
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/portal_square_purple_SQUARE.webm",
                        "04": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/portal_square_red_SQUARE.webm",
                        "05": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/portal_square_yellow_SQUARE.webm"
                    }
                },
                "misc": {
                    "mind_sliver": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/magic/mind_sliver_LINE.webm"
                    }
                }
            },
            "misc": {
                "rectangle": {
                    "eye": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/misc/all_seeing_eye_RECTANGLE.webm"
                    }
                }
            },
            "mix": {
                "square": {
                    "a/l/w": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/air_lightning_water_SQUARE_01.webm"
                    },
                    "all_blast": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/all_blast_SQUARE_01.webm"
                    },
                    "e/f_shot": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/energy_fire_shot_SQUARE_01.webm"
                    },
                    "e/f_explosion": {
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/fire_earth_explosion_SQUARE_02.webm",
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/fire_earth_explosion_SQUARE_03.webm",
                        "04": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/fire_earth_explosion_SQUARE_04.webm",
                        "05": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/fire_earth_explosion_SQUARE_05.webm",
                        "06": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/fire_earth_explosion_SQUARE_06.webm",
                        "07": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/fire_earth_explosion_SQUARE_07.webm"
                    },
                    "f/l_blast": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/fire_lightning_blast_SQUARE_01.webm"
                    },
                    "a/f/l_trails": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/fire_lightning_smoke_trails_explosion_SQUARE_01.webm"
                    },
                    "a/f_explosion": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/fire_smoke_explosion_SQUARE_01.webm"
                    },
                    "all_strike": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/four_element_strike_SQUARE_01.webm"
                    },
                    "e/l_pilar": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/lightning_earth_smash_SQUARE_01.webm"
                    },
                    "l/w_pillar": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/lightning_water_bolt_SQUARE.webm"
                    },
                    "w/w_ball": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/water_electricity_SQUARE_01.webm"
                    }
                },
                "circle": {
                    "electric_ball": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/electric_ball_CIRCLE_02.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/electric_ball_CIRCLE_09.webm",
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/electric_ball_CIRCLE_10.webm"
                    },
                    "embers": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/embers_CIRCLE_02.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/embers_CIRCLE_04.webm"
                    },
                    "e/f_explosion": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/fire_earth_explosion_CIRCLE_01.webm"
                    },
                    "f/w_swirl": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/fire_water_swirl_CIRCLE_01.webm"
                    },
                    "e/w_swirl": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/water_energy_electric_swirl_CIRCLE_01.webm"
                    }
                },
                "ray": {
                    "f/l_bolt": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/fire_lightning_bolt_RAY_01.webm"
                    },
                    "e/l_smash": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/lightning_earth_smash_RAY_02.webm"
                    },
                    "e/w_swirl": {
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/mix/water_energy_swirl_RAY_01.webm"
                    }
                }
            },
            "water": {
                "circle": {
                    "acid_splash": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/water/acid_splash_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/water/acid_splash_CIRCLE_02.webm"
                    },
                    "create": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/water/create_water_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/water/create_water_CIRCLE_02.webm"
                    },
                    "ball": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/water/water_ball_CIRCLE_01.webm"
                    }
                },
                "rectangle": {
                    "ice_blast": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/water/ice_blast_RECTANGLE_01.webm"
                    },
                    "splash": {
                        "03": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/water/water-splash_RECTANGLE_01.webm"
                    },
                    "wall": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/water/water_wall_RECTANGLE_01.webm"
                    }
                },
                "ray": {
                    "blast": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/water/water_blast_RAY_01.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/water/water_blast_RAY_02.webm"
                    }
                },
                "square": {
                    "impact": {
                        "default": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/water/water_impact_SQUARE_01.webm"
                    },
                    "splash": {
                        "01": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/water/water_splash_SQUARE_01.webm",
                        "02": "modules/animated-spell-effects-cartoon/spell-effects/cartoon/water/water_splash_SQUARE_02.webm"
                    }
                }
            }
        };
        Sequencer.Database.registerEntries('jkasec', cartoonDatabase);
    }
    if (game.modules.get('animated-spell-effects')) {
        const database = {
            "air": {
                "circle": {
                    "gust": {
                        "default": "modules/animated-spell-effects/spell-effects/air/air_gust_CIRCLE_01.webm"
                    },
                    "whisps": {
                        "default": "modules/animated-spell-effects/spell-effects/air/air_whisps_CIRCLE_01.webm"
                    },
                    "clouds/lightning": {
                        "01": "modules/animated-spell-effects/spell-effects/air/clouds_lightning_CIRCLE_01.webm"
                    },
                    "dust_explosions": {
                        "default": "modules/animated-spell-effects/spell-effects/air/dust_explosions_CIRCLE.webm"
                    },
                    "smoke_column": {
                        "default": "modules/animated-spell-effects/spell-effects/air/magical_smoke_column_CIRCLE.webm"
                    },
                    "rotating_column": {
                        "default": "modules/animated-spell-effects/spell-effects/air/rotating_smoke_eye_CIRCLE.webm"
                    },
                    "shockwave": {
                        "02": "modules/animated-spell-effects/spell-effects/air/shockwave_CIRCLE_01.webm",
                        "03": "modules/animated-spell-effects/spell-effects/air/shockwave_CIRCLE_02.webm"
                    },
                    "smoke_explosion": {
                        "01": "modules/animated-spell-effects/spell-effects/air/smoke_explosion_CIRCLE_05.webm",
                        "02": "modules/animated-spell-effects/spell-effects/air/smoke_explosion_CIRCLE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/air/smoke_explosion_CIRCLE_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/air/smoke_explosion_CIRCLE_04.webm"
                    },
                    "storm_ball": {
                        "01": "modules/animated-spell-effects/spell-effects/air/storm_ball_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/air/storm_ball_CIRCLE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/air/storm_ball_CIRCLE_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/air/storm_ball_CIRCLE_04.webm",
                        "05": "modules/animated-spell-effects/spell-effects/air/storm_ball_CIRCLE_05.webm"
                    }
                },
                "ray": {
                    "whisps": {
                        "default": "modules/animated-spell-effects/spell-effects/air/black_smoke_RAY_01.webm"
                    },
                    "smoke_blast": {
                        "default": "modules/animated-spell-effects/spell-effects/air/smoke_blast_RAY_01.webm"
                    },
                    "storm_ball": {
                        "05": "modules/animated-spell-effects/spell-effects/air/wind_blast_RAY_01.webm"
                    }
                },
                "square": {
                    "clouds/lightning": {
                        "02": "modules/animated-spell-effects/spell-effects/air/clouds_lightning_SQUARE_02.webm"
                    },
                    "pillar": {
                        "default": "modules/animated-spell-effects/spell-effects/air/smoke_pillar_SQUARE_01.webm"
                    }
                },
                "cone": {
                    "dust_blast": {
                        "01": "modules/animated-spell-effects/spell-effects/air/dust_blast_CONE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/air/dust_blast_CONE_02.webm"
                    },
                    "smoke_blast": {
                        "default": "modules/animated-spell-effects/spell-effects/air/smoke_CONE.webm"
                    }
                },
                "misc": {
                    "shockwave": {
                        "01": "modules/animated-spell-effects/spell-effects/air/shockwave_01_transcentre.webm"
                    }
                }
            },
            "earth": {
                "square": {
                    "cracks": {
                        "default": "modules/animated-spell-effects/spell-effects/earth/earth-cracks_SQUARE_01.webm"
                    },
                    "ploughed": {
                        "default": "modules/animated-spell-effects/spell-effects/energy/earth-ploughed_SQUARE_01.webm"
                    }
                },
                "rectangle": {
                    "hole": {
                        "default": "modules/animated-spell-effects/spell-effects/earth/earth-hole_RECTANGLE_01.webm"
                    }
                }
            },
            "energy": {
                "ray": {
                    "disintegration_ray": {
                        "01": "modules/animated-spell-effects/spell-effects/energy/disintegration_beam_RAY_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/energy/disintegration_beam_RAY_02.webm"
                    },
                    "beam": {
                        "10": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_09.webm",
                        "11": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_10.webm",
                        "12": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_11.webm",
                        "02": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_01.webm",
                        "03": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_02.webm",
                        "04": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_03.webm",
                        "05": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_04.webm",
                        "06": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_05.webm",
                        "07": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_06.webm",
                        "08": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_07.webm",
                        "09": "modules/animated-spell-effects/spell-effects/energy/energy_beam_RAY_08.webm"
                    },
                    "blast": {
                        "01": "modules/animated-spell-effects/spell-effects/energy/energy_blast_RAY_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/energy/energy_blast_RAY_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/energy/energy_blast_RAY_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/energy/energy_blast_RAY_04.webm",
                        "05": "modules/animated-spell-effects/spell-effects/energy/energy_blast_RAY_05.webm",
                        "06": "modules/animated-spell-effects/spell-effects/energy/energy_blast_RAY_06.webm",
                        "07": "modules/animated-spell-effects/spell-effects/energy/energy_blast_RAY_07.webm",
                        "08": "modules/animated-spell-effects/spell-effects/energy/energy_blast_RAY_08.webm",
                        "09": "modules/animated-spell-effects/spell-effects/energy/energy_blast_RAY_09.webm"
                    },
                    "lightning": {
                        "default": "modules/animated-spell-effects/spell-effects/energy/energy_lightning_RAY_01.webm"
                    },
                    "throw": {
                        "10": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_10.webm",
                        "01": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_04.webm",
                        "05": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_05.webm",
                        "06": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_06.webm",
                        "07": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_07.webm",
                        "08": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_08.webm",
                        "09": "modules/animated-spell-effects/spell-effects/energy/energy_throw_RAY_09.webm"
                    }
                },
                "circle": {
                    "disintegration_bomb": {
                        "default": "modules/animated-spell-effects/spell-effects/energy/disintegration_bomb_CIRCLE_01.webm"
                    },
                    "ball": {
                        "01": "modules/animated-spell-effects/spell-effects/energy/disintegration_bomb_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/energy/energy_ball_CIRCLE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/energy/energy_ball_CIRCLE_04.webm",
                        "04": "modules/animated-spell-effects/spell-effects/energy/energy_ball_CIRCLE_05.webm"
                    },
                    "circle": {
                        "01": "modules/animated-spell-effects/spell-effects/energy/energy_circle_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/energy/energy_circle_CIRCLE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/energy/energy_circle_CIRCLE_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/energy/energy_circle_CIRCLE_05.webm"
                    },
                    "explosion": {
                        "03": "modules/animated-spell-effects/spell-effects/energy/energy_explosion_CIRCLE_01.webm",
                        "04": "modules/animated-spell-effects/spell-effects/energy/energy_explosion_CIRCLE_03.webm",
                        "05": "modules/animated-spell-effects/spell-effects/energy/energy_explosion_CIRCLE_04.webm",
                        "06": "modules/animated-spell-effects/spell-effects/energy/energy_explosion_CIRCLE_05.webm",
                        "07": "modules/animated-spell-effects/spell-effects/energy/energy_explosion_CIRCLE_06.webm"
                    },
                    "portal": {
                        "01": "modules/animated-spell-effects/spell-effects/energy/energy_portal_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/energy/energy_portal_strange_CIRCLE.webm"
                    },
                    "quick_burst": {
                        "03": "modules/animated-spell-effects/spell-effects/energy/energy_quickburst_CIRCLE_01.webm",
                        "04": "modules/animated-spell-effects/spell-effects/energy/energy_quickburst_CIRCLE_06.webm",
                        "05": "modules/animated-spell-effects/spell-effects/energy/energy_quickburst_CIRCLE_04.webm",
                        "06": "modules/animated-spell-effects/spell-effects/energy/energy_quickburst_CIRCLE_07.webm"
                    },
                    "shield": {
                        "01": "modules/animated-spell-effects/spell-effects/energy/energy_shield_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/energy/energy_shield_CIRCLE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/energy/energy_shield_CIRCLE_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/energy/energy_shield_CIRCLE_04.webm"
                    },
                    "flash_circle": {
                        "default": "modules/animated-spell-effects/spell-effects/energy/flash_CIRCLE_01.webm"
                    }
                },
                "misc": {
                    "beam": {
                        "01": "modules/animated-spell-effects/spell-effects/energy/energy_beam_purple_03.webm"
                    },
                    "explosion": {
                        "01": "modules/animated-spell-effects/spell-effects/energy/energy_explosion_02.webm",
                        "02": "modules/animated-spell-effects/spell-effects/energy/energy_explosion_02.webm"
                    },
                    "impact": {
                        "default": "modules/animated-spell-effects/spell-effects/energy/energy_impact_01.webm"
                    },
                    "quick_burst": {
                        "01": "modules/animated-spell-effects/spell-effects/energy/energy_quickburst_03.webm",
                        "02": "modules/animated-spell-effects/spell-effects/energy/energy_quickburst_05.webm"
                    }
                }
            },
            "fire": {
                "square": {
                    "fire": {
                        "default": "modules/animated-spell-effects/spell-effects/fire/fire_ball_SQUARE_02.webm"
                    },
                    "dragon": {
                        "default": "modules/animated-spell-effects/spell-effects/fire/fire_dragon_SQUARE_01.webm"
                    },
                    "explosion": {
                        "07": "modules/animated-spell-effects/spell-effects/fire/fire_explosion_SQUARE_01.webm",
                        "08": "modules/animated-spell-effects/spell-effects/fire/fire_explosion_SQUARE_02.webm"
                    },
                    "pheonix": {
                        "default": "modules/animated-spell-effects/spell-effects/fire/fire_pheonix_SQUARE_01.webm"
                    },
                    "skull": {
                        "default": "modules/animated-spell-effects/spell-effects/fire/fire_skull_SQUARE_01.webm"
                    },
                    "sparks": {
                        "01": "modules/animated-spell-effects/spell-effects/fire/sparks_impact_SQUARE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/fire/sparks_impact_SQUARE_02.webm"
                    },
                    "square": {
                        "01": "modules/animated-spell-effects/spell-effects/fire/fire_square_SQUARE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/fire/fire_square_SQUARE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/fire/fire_square_SQUARE_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/fire/fire_square_SQUARE_04.webm"
                    },
                    "sword": {
                        "default": "modules/animated-spell-effects/spell-effects/fire/fire_sword_SQUARE_01.webm"
                    }
                },
                "circle": {
                    "embers_circle": {
                        "01": "modules/animated-spell-effects/spell-effects/fire/embers_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/fire/embers_CIRCLE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/fire/embers_CIRCLE_03.webm"
                    },
                    "explosion": {
                        "default": "modules/animated-spell-effects/spell-effects/fire/explosion_CIRCLE_01.webm",
                        "01": "modules/animated-spell-effects/spell-effects/fire/fire_explosion_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/fire/fire_explosion_CIRCLE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/fire/fire_explosion_CIRCLE_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/fire/fire_explosion_CIRCLE_04.webm",
                        "05": "modules/animated-spell-effects/spell-effects/fire/fire_explosion_CIRCLE_05.webm",
                        "06": "modules/animated-spell-effects/spell-effects/fire/fire_explosion_CIRCLE_06.webm"
                    },
                    "fireball": {
                        "11": "modules/animated-spell-effects/spell-effects/fire/fire-ball_CIRCLE_03.webm",
                        "01": "modules/animated-spell-effects/spell-effects/fire/fire_ball_CIRCLE_02.webm",
                        "02": "modules/animated-spell-effects/spell-effects/fire/fire_ball_CIRCLE_03.webm",
                        "03": "modules/animated-spell-effects/spell-effects/fire/fire_ball_CIRCLE_04.webm",
                        "04": "modules/animated-spell-effects/spell-effects/fire/fire_ball_CIRCLE_05.webm",
                        "05": "modules/animated-spell-effects/spell-effects/fire/fire_ball_CIRCLE_07.webm",
                        "06": "modules/animated-spell-effects/spell-effects/fire/fire_ball_CIRCLE_08.webm"
                    },
                    "bird": {
                        "default": "modules/animated-spell-effects/spell-effects/fire/fire_bird_CIRCLE_01.webm"
                    },
                    "circle": {
                        "01": "modules/animated-spell-effects/spell-effects/fire/fire_circle_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/fire/fire_circle_CIRCLE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/fire/fire_circle_CIRCLE_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/fire/fire_circle_CIRCLE_04.webm",
                        "05": "modules/animated-spell-effects/spell-effects/fire/fire_circle_CIRCLE_05.webm"
                    },
                    "rotating": {
                        "01": "modules/animated-spell-effects/spell-effects/fire/fire_ball_rotating_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/fire/fire_ball_rotating_CIRCLE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/fire/fire_ball_rotating_CIRCLE_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/fire/fire_ball_rotating_CIRCLE_04.webm"
                    },
                    "solar_ball": {
                        "default": "modules/animated-spell-effects/spell-effects/fire/solar_ball_CIRCLE_01.webm"
                    }
                },
                "ray": {
                    "fireball": {
                        "10": "modules/animated-spell-effects/spell-effects/fire/fire_ball_RAY_04.webm",
                        "07": "modules/animated-spell-effects/spell-effects/fire/fire_ball_RAY_01.webm",
                        "08": "modules/animated-spell-effects/spell-effects/fire/fire_ball_RAY_02.webm",
                        "09": "modules/animated-spell-effects/spell-effects/fire/fire_ball_RAY_03.webm"
                    },
                    "beam": {
                        "01": "modules/animated-spell-effects/spell-effects/fire/fire_beam_RAY_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/fire/fire_beam_RAY_03.webm"
                    },
                    "blast": {
                        "01": "modules/animated-spell-effects/spell-effects/fire/fire_blast_RAY_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/fire/fire_blast_real_RAY_01.webm",
                        "03": "modules/animated-spell-effects/spell-effects/fire/fire_blast_real_RAY_02.webm",
                        "04": "modules/animated-spell-effects/spell-effects/fire/fire_blast_zigzag_RAY_01.webm",
                        "05": "modules/animated-spell-effects/spell-effects/fire/fire_blast_zigzag_RAY_02.webm",
                        "06": "modules/animated-spell-effects/spell-effects/fire/fire_blast_zigzag_RAY_03.webm",
                        "07": "modules/animated-spell-effects/spell-effects/fire/fire_blast_zigzag_RAY_04.webm",
                        "08": "modules/animated-spell-effects/spell-effects/fire/fire_blast_zigzag_RAY_05.webm"
                    },
                    "bolt": {
                        "01": "modules/animated-spell-effects/spell-effects/fire/fire_bolt_RAY_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/fire/fire_bolt_RAY_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/fire/fire_bolt_RAY_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/fire/fire_bolt_RAY_04.webm"
                    },
                    "wall": {
                        "01": "modules/animated-spell-effects/spell-effects/fire/fire_wall_RAY_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/fire/fire_wall_RAY_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/fire/fire_wall_RAY_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/fire/fire_wall_RAY_04.webm",
                        "05": "modules/animated-spell-effects/spell-effects/fire/fire_wall_RAY_05.webm"
                    }
                },
                "cone": {
                    "breath": {
                        "default": "modules/animated-spell-effects/spell-effects/fire/fire_breath_CONE_01.webm"
                    },
                    "cone": {
                        "01": "modules/animated-spell-effects/spell-effects/fire/fire_cone_CONE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/fire/fire_cone_CONE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/fire/fire_cone_CONE_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/fire/fire_cone_CONE_04.webm",
                        "05": "modules/animated-spell-effects/spell-effects/fire/fire_cone_CONE_05.webm"
                    }
                },
                "misc": {
                    "rotating": {
                        "05": "modules/animated-spell-effects/spell-effects/fire/fire_ball_yellow.webm"
                    }
                },
                "rectangle": {
                    "wall": {
                        "06": "modules/animated-spell-effects/spell-effects/fire/fire_wall_RECTANGLE_06.webm",
                        "07": "modules/animated-spell-effects/spell-effects/fire/fire_wall_RECTANGLE_07.webm"
                    }
                }
            },
            "gunshots": {
                "misc": {
                    "15ft": {
                        "15": "modules/animated-spell-effects/spell-effects/gunshots/gunshot_15ft_1000x400.webm"
                    },
                    "30ft": {
                        "30": "modules/animated-spell-effects/spell-effects/gunshots/gunshot_30ft_1600x400.webm"
                    },
                    "45ft": {
                        "45": "modules/animated-spell-effects/spell-effects/gunshots/gunshot_60ft_2800x400.webm"
                    }
                }
            },
            "ice": {
                "ray": {
                    "ball": {
                        "default": "modules/animated-spell-effects/spell-effects/ice/ice_ball_RAY_01.webm"
                    },
                    "frost_beam": {
                        "01": "modules/animated-spell-effects/spell-effects/ice/frost_beam_RAY_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/ice/frost_beam_RAY_02.webm"
                    }
                },
                "cone": {
                    "frost_cone": {
                        "01": "modules/animated-spell-effects/spell-effects/ice/frost_CONE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/ice/frost_CONE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/ice/frost_CONE_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/ice/frost_CONE_04.webm",
                        "05": "modules/animated-spell-effects/spell-effects/ice/frost_CONE_05.webm",
                        "06": "modules/animated-spell-effects/spell-effects/ice/frost_CONE_06.webm",
                        "07": "modules/animated-spell-effects/spell-effects/ice/frost_CONE_07.webm"
                    }
                },
                "rectangle": {
                    "frost_rectangle": {
                        "default": "modules/animated-spell-effects/spell-effects/ice/frost-RECTANGLE_01.webm"
                    }
                },
                "square": {
                    "frost_square": {
                        "default": "modules/animated-spell-effects/spell-effects/ice/frost-SQUARE_01.webm"
                    },
                    "shield": {
                        "default": "modules/animated-spell-effects/spell-effects/ice/ice_shield_rotating_SQUARE_01.webm"
                    }
                }
            },
            "lightning": {
                "circle": {
                    "portal": {
                        "default": "modules/animated-spell-effects/spell-effects/lightning/electricity_portal_CIRCLE_01.webm"
                    },
                    "explosion": {
                        "default": "modules/animated-spell-effects/spell-effects/lightning/lightning_explosion_CIRCLE_01.webm"
                    }
                },
                "ray": {
                    "ray": {
                        "01": "modules/animated-spell-effects/spell-effects/lightning/electricity_RAY_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/lightning/electricity_RAY_02.webm"
                    },
                    "blast": {
                        "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_blast_multicolour_RAY_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/lightning/lightning_blast_RAY_01.webm",
                        "03": "modules/animated-spell-effects/spell-effects/lightning/lightning_blast_RAY_02.webm"
                    },
                    "blue": {
                        "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_blue_RAY_01.webm"
                    },
                    "green": {
                        "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_green_RAY_01.webm"
                    },
                    "m/c": {
                        "default": "modules/animated-spell-effects/spell-effects/lightning/lightning_multicolour_RAY_01.webm"
                    },
                    "purple": {
                        "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_purple_RAY_01.webm"
                    },
                    "raibow": {
                        "default": "modules/animated-spell-effects/spell-effects/lightning/lightning_rainbowRAY_01.webm"
                    },
                    "red": {
                        "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_red_RAY_01.webm"
                    },
                    "slam": {
                        "default": "modules/animated-spell-effects/spell-effects/lightning/lightning_slam_RAY_01.webm"
                    },
                    "yellow": {
                        "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_yellow_RAY_01.webm"
                    }
                },
                "rectangle": {
                    "blue": {
                        "02": "modules/animated-spell-effects/spell-effects/lightning/lightning_blue_RECTANGLE_01.webm"
                    },
                    "flash": {
                        "01": "modules/animated-spell-effects/spell-effects/lightning/lightning_flash_RECTANGLE_01.webm"
                    },
                    "green": {
                        "02": "modules/animated-spell-effects/spell-effects/lightning/lightning_green_RECTANGLE_02.webm"
                    },
                    "purple": {
                        "02": "modules/animated-spell-effects/spell-effects/lightning/lightning_purple_RECTANGLE_01.webm"
                    },
                    "red": {
                        "02": "modules/animated-spell-effects/spell-effects/lightning/lightning_red_RECTANGLE_01.webm"
                    },
                    "yellow": {
                        "02": "modules/animated-spell-effects/spell-effects/lightning/lightning_yellow_RECTANGLE_01.webm"
                    }
                },
                "square": {
                    "flash": {
                        "02": "modules/animated-spell-effects/spell-effects/lightning/lightning_flash_SQUARE_03.webm"
                    }
                }
            },
            "magic": {
                "ray": {
                    "arrow": {
                        "01": "modules/animated-spell-effects/spell-effects/magic/magic_arrow_RAY_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/magic/magic_arrow_RAY_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/magic/magic_arrow_RAY_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/magic/magic_arrow_RAY_04.webm",
                        "05": "modules/animated-spell-effects/spell-effects/magic/magic_arrow_RAY_05.webm",
                        "06": "modules/animated-spell-effects/spell-effects/magic/magic_arrow_RAY_06.webm"
                    },
                    "beam": {
                        "01": "modules/animated-spell-effects/spell-effects/magic/magic_beam_RAY_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/magic/magic_beam_RAY_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/magic/magic_beam_RAY_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/magic/magic_beam_RAY_04.webm",
                        "05": "modules/animated-spell-effects/spell-effects/magic/magic_beam_RAY_05.webm",
                        "06": "modules/animated-spell-effects/spell-effects/magic/magic_beam_RAY_06.webm"
                    },
                    "blast": {
                        "01": "modules/animated-spell-effects/spell-effects/magic/magic_blast_RAY_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/magic/magic_blast_RAY_02.webm"
                    },
                    "missle": {
                        "10": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_10.webm",
                        "11": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_11.webm",
                        "01": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_04.webm",
                        "05": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_05.webm",
                        "06": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_06.webm",
                        "07": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_07.webm",
                        "08": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_08.webm",
                        "09": "modules/animated-spell-effects/spell-effects/magic/magic_missle_RAY_09.webm"
                    },
                    "spiral": {
                        "default": "modules/animated-spell-effects/spell-effects/magic/magic_spiral_RAY_01.webm"
                    },
                    "wild": {
                        "07": "modules/animated-spell-effects/spell-effects/magic/magic_wild_RAY_02.webm"
                    }
                },
                "circle": {
                    "ball": {
                        "11": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_10.webm",
                        "01": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_04.webm",
                        "05": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_05.webm",
                        "06": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_06.webm",
                        "07": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_07.webm",
                        "08": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_08.webm",
                        "09": "modules/animated-spell-effects/spell-effects/magic/magic_ball_CIRCLE_09.webm"
                    },
                    "circle": {
                        "default": "modules/animated-spell-effects/spell-effects/magic/magic_circle_CIRCLE_01.webm"
                    },
                    "explosion": {
                        "01": "modules/animated-spell-effects/spell-effects/magic/explosion_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/magic/magic_explosion_CIRCLE_01.webm",
                        "03": "modules/animated-spell-effects/spell-effects/magic/magic_explosion_CIRCLE_02.webm",
                        "04": "modules/animated-spell-effects/spell-effects/magic/magic_explosion_CIRCLE_03.webm",
                        "05": "modules/animated-spell-effects/spell-effects/magic/magic_explosion_CIRCLE_04.webm",
                        "06": "modules/animated-spell-effects/spell-effects/magic/magic_explosion_CIRCLE_05.webm",
                        "07": "modules/animated-spell-effects/spell-effects/magic/magic_explosion_CIRCLE_06.webm",
                        "08": "modules/animated-spell-effects/spell-effects/magic/magic_explosion_CIRCLE_08.webm"
                    },
                    "impact": {
                        "default": "modules/animated-spell-effects/spell-effects/magic/magic_impact_CIRCLE_01.webm"
                    },
                    "portal": {
                        "01": "modules/animated-spell-effects/spell-effects/magic/magic_portal_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/magic/magic_portal_CIRCLE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/magic/magic_portal_CIRCLE_03.webm"
                    },
                    "shield": {
                        "01": "modules/animated-spell-effects/spell-effects/magic/magic_shield_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/magic/magic_shield_CIRCLE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/magic/magic_shield_CIRCLE_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/magic/magic_shield_CIRCLE_04.webm",
                        "05": "modules/animated-spell-effects/spell-effects/magic/magic_shield_CIRCLE_05.webm"
                    },
                    "shockwave": {
                        "10": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_10.webm",
                        "11": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_11.webm",
                        "12": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_12.webm",
                        "01": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_04.webm",
                        "05": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_05.webm",
                        "06": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_06.webm",
                        "07": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_07.webm",
                        "08": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_08.webm",
                        "09": "modules/animated-spell-effects/spell-effects/magic/magic_shockwave_CIRCLE_09.webm"
                    },
                    "triple": {
                        "default": "modules/animated-spell-effects/spell-effects/magic/triple_CIRCLE_01.webm"
                    },
                    "wild": {
                        "01": "modules/animated-spell-effects/spell-effects/magic/magic_wild_CIRCLE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/magic/magic_wild_CIRCLE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/magic/magic_wild_CIRCLE_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/magic/magic_wild_CIRCLE_04.webm",
                        "05": "modules/animated-spell-effects/spell-effects/magic/magic_wild_CIRCLE_05.webm",
                        "06": "modules/animated-spell-effects/spell-effects/magic/magic_wild_CIRCLE_06.webm"
                    }
                },
                "square": {
                    "dust": {
                        "01": "modules/animated-spell-effects/spell-effects/magic/magic_dust_SQUARE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/magic/magic_dust_SQUARE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/magic/magic_dust_SQUARE_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/magic/magic_dust_SQUARE_04.webm",
                        "05": "modules/animated-spell-effects/spell-effects/magic/magic_dust_SQUARE_05.webm"
                    },
                    "forcefield": {
                        "01": "modules/animated-spell-effects/spell-effects/magic/magic_forcefield_SQUARE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/magic/magic_forcefield_SQUARE_02.webm"
                    },
                    "shieldsquare": {
                        "01": "modules/animated-spell-effects/spell-effects/magic/magic_shield_equip_SQUARE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/magic/magic_shield_equip_SQUARE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/magic/magic_shield_equip_SQUARE_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/magic/magic_shield_equip_SQUARE_04.webm",
                        "05": "modules/animated-spell-effects/spell-effects/magic/magic_shield_equip_SQUARE_05.webm"
                    },
                    "shieldoval": {
                        "01": "modules/animated-spell-effects/spell-effects/magic/magic_shield_SQUARE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/magic/magic_shield_SQUARE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/magic/magic_shield_SQUARE_03.webm",
                        "04": "modules/animated-spell-effects/spell-effects/magic/magic_shield_SQUARE_04.webm"
                    },
                    "sparks": {
                        "01": "modules/animated-spell-effects/spell-effects/magic/magic_sparks_SQUARE_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/magic/magic_sparks_SQUARE_02.webm",
                        "03": "modules/animated-spell-effects/spell-effects/magic/magic_sparks_SQUARE_03.webm"
                    },
                    "strange": {
                        "default": "modules/animated-spell-effects/spell-effects/magic/shield_strange_SQUARE_01.webm"
                    }
                },
                "misc": {
                    "fire": {
                        "01": "modules/animated-spell-effects/spell-effects/magic/magic_fire_01.webm",
                        "02": "modules/animated-spell-effects/spell-effects/magic/magic_fire_02.webm"
                    }
                }
            }
        }
        Sequencer.Database.registerEntries('jkase', database);
    }
});