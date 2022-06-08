import 'package:flutter/material.dart';

class NavBar extends StatelessWidget {
  const NavBar({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 45, vertical: 38),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            children: <Widget>[
              Container(
                width: 60,
                height: 60,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(18),
                  gradient: const LinearGradient(colors: [
                    Color(0xFFC86DD7),
                    Color(0xFF3023AE),
                  ], begin: Alignment.bottomRight, end: Alignment.topLeft),
                ),
                child: const Center(
                  child: Text(
                    "E",
                    style: TextStyle(fontSize: 30, color: Colors.white),
                  ),
                ),
              ),
              const SizedBox(
                width: 16,
              ),
              const Text(
                "Enclothed",
                style: TextStyle(fontSize: 26),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
